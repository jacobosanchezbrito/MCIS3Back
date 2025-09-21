import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

// Cargar variables de entorno desde el archivo .env
config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      process.env.FRONTEND_URL ?? 'http://localhost:3000',  // para entorno local
      'https://mcis-3-front-rjcjbwir1-jacobos-projects-647b1425.vercel.app',  // Agrega tu URL de frontend desplegado en Vercel
    ].filter(Boolean),
    credentials: true,
  });

  // Usar siempre el puerto inyectado por Railway
  const port = process.env.PORT || 4000;  // Railway inyecta PORT
  await app.listen(port);
}
bootstrap();
