// app.controller.ts
import { Controller, Get, Render, Post, Body, Res } from '@nestjs/common';
import { PessoasService } from './pessoas/pessoas.service';
import { CargosService } from './cargos/cargos.service';

@Controller()
export class AppController {
  constructor(
    private readonly pessoasService: PessoasService,
    private readonly cargosService: CargosService,
  ) { }

  @Get()
  @Render('index')
  async getHello() {
    const message = 'Bem vindo!';
    const cargos = await this.cargosService.findAll();
    const pessoas = await this.pessoasService.findAll();

    return { message, cargos, pessoas };
  }

  @Post('/excluir-pessoa')
  async excluirPessoa(@Body('id') id: number, @Res() res) {
    await this.pessoasService.excluirPorId(id);
    res.redirect('/');
  }

  @Post('/excluir-cargo')
  async excluirCargo(@Body('idCargo') id: number, @Res() res) {
    await this.cargosService.excluirPorId(id);
    res.redirect('/');
  }

  @Post('/adicionar-cargo')
  async adicionarCargo(@Body('nome_cargo') nomeCargo: string, @Res() res) {
    await this.cargosService.adicionarCargo(nomeCargo);
    res.redirect('/');
  }

  @Get('/adicionar-cargo')
  @Render('adicionar-cargo')
  async getAdicionarCargo() {
    return {};
  }

  @Post('/adicionar-pessoa')
  async adicionarPessoa(
    @Body('nome') nome: string,
    @Body('idade') idade: number,
    @Body('salario') salario: number,
    @Res() res
  ) {
    await this.pessoasService.adicionarPessoa(nome, idade, salario);
    res.redirect('/');
  }

  @Post('/editar-cargo')
  async editarCargo(
    @Body('idCargo') id: number,
    @Body('nome_cargo') nomeCargo: string,
    @Res() res
  ) {
    await this.cargosService.editarCargo(id, nomeCargo);
    res.redirect('/');
  }

  @Post('/editar-pessoa')
  async editarPessoa(
    @Body('id') id: number,
    @Body('nome') nome: string,
    @Body('idade') idade: number,
    @Body('salario') salario: number,
    @Res() res
  ) {
    await this.pessoasService.editarPessoa(id, nome, idade, salario);
    res.redirect('/');
  }
}
