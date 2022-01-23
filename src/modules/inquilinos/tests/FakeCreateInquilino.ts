import AppError from '@shared/errors/AppError';
import { v4 as uuidv4 } from 'uuid';
import Inquilino from '../infra/typeorm/entities/Inquilino';

interface IRequest {
  nome: string;
  idade: number;
  sexo: string;
  telefone: string;
  email: string;
}

class FakeInquilinoRepository {
  private inquilinos: Inquilino[] = [];

  public async create({
    nome,
    idade,
    sexo,
    telefone,
    email,
  }: IRequest): Promise<Inquilino> {
    const inquilino = new Inquilino();

    const emailExists = await this.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    inquilino.id = uuidv4();
    inquilino.nome = nome;
    inquilino.idade = idade;
    inquilino.sexo = sexo;
    inquilino.telefone = telefone;
    inquilino.email = email;

    this.inquilinos.push(inquilino);

    return inquilino;
  }

  public async findByEmail(email: string): Promise<Inquilino | undefined> {
    const inquilino = this.inquilinos.find(
      (inquilino) => inquilino.email === email
    );

    return inquilino;
  }
}

export default FakeInquilinoRepository;
