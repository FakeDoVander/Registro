// cargos/cargo.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn()
  idCargo: number;

  @Column()
  nome_cargo: string;
}