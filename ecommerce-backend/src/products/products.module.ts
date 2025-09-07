import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [PrismaModule, CloudinaryModule, MailModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
