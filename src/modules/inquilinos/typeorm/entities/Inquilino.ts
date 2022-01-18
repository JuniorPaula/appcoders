import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('inquilinos')
class Inquilino {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('int')
  idade: number;

  @Column()
  sexo: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}

export default Inquilino;
