import { Controller, Get, Patch, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('alertas')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  findPendientes() {
    return this.alertsService.findPendientes();
  }
  
  @Patch(':id/atendida')
  marcarAtendida(@Param('id', ParseIntPipe) id: number) {
    return this.alertsService.marcarAtendida(id);
  }
}
