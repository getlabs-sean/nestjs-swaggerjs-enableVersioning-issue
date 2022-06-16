import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import fs from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

    // enable versioning
    app.enableVersioning({
        defaultVersion: ['1', '2'],
        type: VersioningType.URI,
    });

    const builder = new DocumentBuilder()
        .setTitle('Some API')
        .setVersion('1')
        .setDescription('This is a test swagger doc');
    const document = SwaggerModule.createDocument(app, builder.build(), {
      operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    });

    // missing responseBody in each version
    console.log(JSON.stringify(document, null, 2));




}
bootstrap();
