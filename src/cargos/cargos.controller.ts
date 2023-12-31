// cargos/cargos.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CargosService } from './cargos.service';
import { Cargo } from './cargo.entity';

@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {} 
}