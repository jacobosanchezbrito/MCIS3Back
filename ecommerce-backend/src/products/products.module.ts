import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MailModule } from '../mail/mail.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [PrismaModule, MailModule], 
})
export class ProductsModule {}
