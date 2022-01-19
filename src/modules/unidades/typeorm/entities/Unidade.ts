import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('unidades')
class Unidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  identificacao: string;

  @Column()
  proprietario: string;

  @Column('int')
  condominio: number;

  @Column()
  endereco: string;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}

export default Unidade;
