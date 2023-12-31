// cargos/cargos.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargosController } from './cargos.controller';
import { CargosService } from './cargos.service';
import { Cargo } from './cargo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cargo])],
  controllers: [CargosController],
  providers: [CargosService], // Certifique-se de adicionar o CargosService como provedor
  exports: [CargosService], // Adicione essa linha se precisar exportar o serviço
})
export class CargosModule { }
