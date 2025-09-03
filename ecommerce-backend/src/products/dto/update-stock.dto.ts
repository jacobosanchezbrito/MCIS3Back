import { IsNumber } from 'class-validator';

export class UpdateStockDto {
  @IsNumber()
  cantidad: number; // positiva si entra stock, negativa si se retira
}
