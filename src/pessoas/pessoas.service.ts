// pessoas/pessoas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoasRepository: Repository<Pessoa>,
  ) { }

  async excluirPorId(id: number): Promise<void> {
    await this.pessoasRepository.delete(id);
  }

  async adicionarPessoa(nome: string, idade: number, salario: number): Promise<Pessoa> {
    const novaPessoa = this.pessoasRepository.create({ nome, idade, salario });
    return await this.pessoasRepository.save(novaPessoa);
  }

  async findAll(): Promise<Pessoa[]> {
    return await this.pessoasRepository.find();
  }

  async editarPessoa(id: number, nome: string, idade: number, salario: number): Promise<Pessoa> {
    const pessoaExistente = await this.pessoasRepository.findOne({ where: { id } });

    if (!pessoaExistente) {
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada.`);
    }

    pessoaExistente.nome = nome;
    pessoaExistente.idade = idade;
    pessoaExistente.salario = salario;

    return await this.pessoasRepository.save(pessoaExistente);
  }

}
