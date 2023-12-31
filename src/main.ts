// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
const exphbs = require('express-handlebars');
import * as path from 'path';
import * as bodyParser from 'body-parser';  // Adicione esta linha

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obtenha o aplicativo Express subjacente
  const expressApp = app.getHttpAdapter().getInstance() as express.Application;

  // Configuração do mecanismo de visualização Handlebars
  expressApp.engine('hbs', exphbs({ extname: 'hbs' }) as any);
  expressApp.set('view engine', 'hbs');

  // Ajuste o caminho para o diretório de visualizações
  // Certifique-se de que o caminho está correto para o modo de produção
  const viewsPath = path.resolve(__dirname, '..', 'views');
  expressApp.set('views', viewsPath);

  // Configuração para servir arquivos estáticos (CSS, imagens, etc.)
  expressApp.use(express.static(path.join(__dirname, '..', 'public')));

  // Adicione o middleware BodyParser
  expressApp.use(bodyParser.json());

  await app.listen(3000);
}

bootstrap();
