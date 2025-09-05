import { IsDateString, IsOptional } from 'class-validator';

export class FilterStockLogDto {
  @IsDateString()
  fechaInicio: string;

  @IsDateString()
  fechaFin: string;

  @IsOptional()
  productoId?: number;
}
