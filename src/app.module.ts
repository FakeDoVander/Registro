//app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PessoasModule } from './pessoas/pessoas.module';
import { CargosModule } from './cargos/cargos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cargosepessoas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PessoasModule,
    CargosModule,
  ],
  controllers: [AppController],
})
export class AppModule { }