import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
      origin: [
      'http://localhost:3000',
      'https://mcis-3-front-rjcjbwir1-jacobos-projects-647b1425.vercel.app',
      'https://mcis-3-front.vercel.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();