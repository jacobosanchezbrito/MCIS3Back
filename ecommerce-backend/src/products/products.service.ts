import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ProductEstado, LogTipo } from '@prisma/client';
import { MailService } from '../mail/mail.service';
import { FilterStockLogDto } from './dto/filter-stock-log.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        ...createProductDto,
        estado: createProductDto.estado ?? ProductEstado.ACTIVO,
      },
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      where: { estado: ProductEstado.ACTIVO },
    });
  }

  async findOne(id: number) {
    const producto = await this.prisma.product.findUnique({ where: { id } });
    if (!producto) throw new NotFoundException('Producto no encontrado');
    return producto;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id); // valida que exista
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // valida existencia
    return this.prisma.product.update({
      where: { id },
      data: { estado: ProductEstado.INACTIVO },
    });
  }

  async updateStock(id: number, updateStockDto: UpdateStockDto, usuarioId: number) {
    const producto = await this.findOne(id);
    const nuevoStock = producto.stock + updateStockDto.cantidad;

    if (nuevoStock < 0) throw new BadRequestException('Stock insuficiente');

    // Actualiza stock
    await this.prisma.product.update({
      where: { id },
      data: {
        stock: nuevoStock,
        estado: nuevoStock === 0 ? ProductEstado.AGOTADO : ProductEstado.ACTIVO,
      },
    });

    // Registra historial
    await this.prisma.stockLog.create({
      data: {
        productoId: id,
        cantidad: updateStockDto.cantidad,
        tipo: updateStockDto.cantidad > 0 ? LogTipo.ENTRADA : LogTipo.SALIDA,
        usuarioId,
      },
    });

    // ⚠️ Verificación de alerta
    if (nuevoStock <= (producto.stockMinimo ?? 0)) {
      await this.prisma.alerta.create({
        data: {
          productoId: id,
          mensaje: `El producto "${producto.nombre}" está en nivel crítico de stock (${nuevoStock} unidades)`,
        },
      });

      // Enviar correo al admin (Ethereal para pruebas)
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@mercadocafetero.com';
      await this.mailService.sendStockAlert(adminEmail, producto.nombre, nuevoStock);
    }

    return { id, nuevoStock };
  }

  async findLogs(id: number) {
    await this.findOne(id);
    return this.prisma.stockLog.findMany({
      where: { productoId: id },
      orderBy: { fecha: 'desc' },
      include: {
        producto: { select: { id: true, nombre: true } },
      },
    });
  }

  // ✅ Corrección: Prisma no permite campo vs campo en where; filtramos en JS
  async findCriticos() {
    const activos = await this.prisma.product.findMany({
      where: { estado: ProductEstado.ACTIVO },
      select: {
        id: true,
        nombre: true,
        stock: true,
        stockMinimo: true,
        categoria: true,
      },
    });
    return activos.filter(p => p.stock <= (p.stockMinimo ?? 0));
  }

  async findLogsByDateRange(dto: FilterStockLogDto) {
    const { fechaInicio, fechaFin, productoId } = dto;

    return this.prisma.stockLog.findMany({
      where: {
        fecha: {
          gte: new Date(fechaInicio),
          lte: new Date(fechaFin),
        },
        ...(productoId ? { productoId } : {}),
      },
      orderBy: { fecha: 'desc' },
      include: {
        producto: {
          select: { id: true, nombre: true },
        },
      },
    });
  }

  // ✅ Versión "migrada": BD con imagenPublicId y imagenUrl opcional
  async updateImageUrl(
    id: number,
    url: string,
    newPublicId?: string
  ): Promise<{ id: number; imagenUrl: string | null; imagenPublicId: string | null }> {
    const producto = await this.prisma.product.findUnique({
      where: { id },
      select: { id: true, imagenPublicId: true },
    });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    // Borra imagen previa si existe y cambia
    if (producto.imagenPublicId && producto.imagenPublicId !== newPublicId) {
      try {
        await this.cloudinaryService.deleteImage(producto.imagenPublicId);
      } catch {
        // No detenemos la actualización si el delete falla
      }
    }

    const updated = await this.prisma.product.update({
      where: { id },
      data: {
        imagenUrl: url ?? null,
        imagenPublicId: newPublicId ?? null,
      },
      select: { id: true, imagenUrl: true, imagenPublicId: true },
    });

    return updated;
  }
}
