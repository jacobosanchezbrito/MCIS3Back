import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';

// Enum para el estado del producto
export enum ProductEstado {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
  AGOTADO = 'AGOTADO',
}

export class CreateProductDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  @IsOptional()
  descripcionLarga?: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsString()
  categoria: string;

  @IsString()
  @IsOptional()
  subcategoria?: string;

  @IsString()
  @IsOptional()
  marca?: string;

  @IsString()
  imagenUrl: string;

  @IsEnum(ProductEstado)
  @IsOptional()
  estado?: ProductEstado; 

  @IsNumber()
  @IsOptional()
  stockMinimo?: number;
}
