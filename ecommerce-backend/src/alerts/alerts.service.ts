import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlertsService {
  constructor(private prisma: PrismaService) {}

  async findPendientes() {
    return this.prisma.alerta.findMany({
      where: { atendida: false },
      include: { producto: { select: { id: true, nombre: true } } },
    });
  }
  

  async marcarAtendida(id: number) {
    return this.prisma.alerta.update({
      where: { id },
      data: { atendida: true 
        , fechaAtendida: new Date()
      },
    });
  }
}
