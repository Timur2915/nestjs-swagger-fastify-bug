import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  const basePath = 'api';

  const options = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('API description')
    .setBasePath(basePath)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${basePath}/docs`, app, document);

  await app.listen(3000);
}
bootstrap();
