import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      process.env.FRONTEND_URL ?? 'http://localhost:3000', // dev local
      process.env.FRONTEND_URL_PREVIEW ?? ''               // opcional (deploys de preview)
    ].filter(Boolean),
    credentials: true,
  });

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000; // Railway inyecta PORT
  await app.listen(port);
}
bootstrap();
