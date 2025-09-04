import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // URL de tu frontend
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 4000); // usa 4000 para diferenciarlo del frontend
}
bootstrap();