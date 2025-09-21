import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000', // para pruebas locales
      'mcis-3-front-jacobos-projects-647b1425.vercel.app', // tu front en Vercel
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // si manejas cookies o headers con credenciales
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
