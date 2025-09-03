import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <-- import
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AlertsModule } from './alerts/alerts.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- hace que las variables de .env sean globales
    PrismaModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    AlertsModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
