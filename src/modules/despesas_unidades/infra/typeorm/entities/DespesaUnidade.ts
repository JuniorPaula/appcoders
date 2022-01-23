import { IDespesaUnidade } from '@modules/despesas_unidades/domain/models/IDespesaUnidade';
import Unidade from '@modules/unidades/infra/typeorm/entities/Unidade';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('despesas_unidades')
class DespesaUnidade implements IDespesaUnidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column()
  tipo_despesa: string;

  @Column('decimal')
  valor: number;

  @Column()
  vencimento_fatura: Date;

  @Column()
  status_pagamento: boolean;

  @Column()
  unidade_id: string;

  @ManyToOne(() => Unidade)
  @JoinColumn({ name: 'unidade_id' })
  unidade: Unidade;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}

export default DespesaUnidade;
