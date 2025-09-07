import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { FilterStockLogDto } from './dto/filter-stock-log.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('productos')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // --- Admin only ---
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Patch(':id/stock')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStockDto: UpdateStockDto,
    @Request() req,
  ) {
    return this.productsService.updateStock(id, updateStockDto, req.user.userId);
  }

  // --- Clientes pueden ver ---
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // ⬇️ PON este ANTES de :id para evitar colisión
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('criticos')
  findCriticos() {
    return this.productsService.findCriticos();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id/logs')
  findLogs(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findLogs(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('logs/rango')
  findLogsByDateRange(@Body() dto: FilterStockLogDto) {
    return this.productsService.findLogsByDateRange(dto);
  }

  // --- NUEVO: subir imagen del producto ---
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post(':id/imagen')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
          return cb(new BadRequestException('Solo JPG, JPEG, PNG o WEBP'), false);
        }
        cb(null, true);
      },
    }),
  )
  async uploadImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('No se envió archivo');

    // 1) Subir a Cloudinary
    const { secure_url, public_id } = await this.cloudinaryService.uploadImage(
      file.buffer,
      'productos'
    );

    // 2) Guardar URL y public_id en BD (borrando imagen anterior si existe)
    const updated = await this.productsService.updateImageUrl(id, secure_url, public_id);

    return {
      message: 'Imagen actualizada',
      imagenUrl: updated.imagenUrl,
      imagenPublicId: updated.imagenPublicId,
    };
  }
}
