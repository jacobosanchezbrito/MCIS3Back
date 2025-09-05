import { Controller, Post, Get, Patch, Delete, Param, Body, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { FilterStockLogDto } from './dto/filter-stock-log.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('productos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

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
  @Get('criticos')
  findCriticos() {
    return this.productsService.findCriticos();
  }

  // products.controller.ts
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('logs/rango')
  findLogsByDateRange(@Body() dto: FilterStockLogDto) {
    return this.productsService.findLogsByDateRange(dto);
  }


}
