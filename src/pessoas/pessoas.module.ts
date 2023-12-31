// pessoas/pessoas.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasController } from './pessoas.controller';
import { PessoasService } from './pessoas.service';
import { Pessoa } from './pessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoasService], // Certifique-se de adicionar o PessoasService como provedor
  exports: [PessoasService], // Certifique-se de exportar o PessoasService se for usado fora deste módulo
})
export class PessoasModule { }
