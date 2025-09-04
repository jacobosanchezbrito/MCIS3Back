import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ProductEstado, LogTipo } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

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
      data: { stock: nuevoStock, estado: nuevoStock === 0 ? ProductEstado.AGOTADO : ProductEstado.ACTIVO },
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
    if (nuevoStock <= producto.stockMinimo) {
      await this.prisma.alerta.create({
        data: {
          productoId: id,
          mensaje: `El producto "${producto.nombre}" está en nivel crítico de stock (${nuevoStock} unidades)`,
        },
      });
    }
    return { id, nuevoStock };
  }

  async findLogs(id: number) {
    // primero verificamos que el producto exista
    await this.findOne(id);

    return this.prisma.stockLog.findMany({
      where: { productoId: id },
      orderBy: { fecha: 'desc' },
      include: {
        producto: {
          select: { id: true, nombre: true },
        },
      },
    });
  }
}
