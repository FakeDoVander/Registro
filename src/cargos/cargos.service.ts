// cargos/cargos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from './cargo.entity';

@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargosRepository: Repository<Cargo>,
  ) { }

  async excluirPorId(id: number): Promise<void> {
    await this.cargosRepository.delete(id);
  }

  async adicionarCargo(nomeCargo: string): Promise<Cargo> {
    const novoCargo = this.cargosRepository.create({ nome_cargo: nomeCargo });
    return await this.cargosRepository.save(novoCargo);
  }

  async findAll(): Promise<Cargo[]> {
    return await this.cargosRepository.find();
  }

  async editarCargo(idCargo: number, nomeCargo: string): Promise<Cargo> {
    const cargoExistente = await this.cargosRepository.findOne({ where: { idCargo } });

    if (!cargoExistente) {
      throw new NotFoundException(`Curso com ID ${idCargo} não encontrada.`);
    }

    cargoExistente.nome_cargo = nomeCargo;

    return await this.cargosRepository.save(cargoExistente);
  }
}