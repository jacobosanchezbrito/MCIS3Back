import { Injectable, Logger } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);

  constructor() {
    // Lee CLOUDINARY_URL del .env automáticamente y forza HTTPS
    cloudinary.config({ secure: true });
  }

  uploadImage(
    buffer: Buffer,
    folder = 'productos'
  ): Promise<{ secure_url: string; public_id: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder, resource_type: 'image' },
        (error, result) => {
          if (error || !result) return reject(error);
          resolve({ secure_url: result.secure_url, public_id: result.public_id });
        },
      );
      streamifier.createReadStream(buffer).pipe(uploadStream);
    });
  }

  deleteImage(publicId: string) {
    if (!publicId) return Promise.resolve(null);
    return cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
  }
}
