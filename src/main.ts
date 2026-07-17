import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Swagger
    const config = new DocumentBuilder()
        .setTitle('EchoFlow Parser API')
        .setDescription('This API created for parsing Spotify playlists.')
        .setVersion('dev')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Listener
    await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
