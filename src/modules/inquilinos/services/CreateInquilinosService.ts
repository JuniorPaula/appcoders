import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import InquilinosRepository from '../infra/typeorm/repositories/InquilinosRepository';
import Inquilino from '../infra/typeorm/entities/Inquilino';

interface IRequest {
  nome: string;
  idade: number;
  sexo: string;
  telefone: string;
  email: string;
}

class CreateInquilinosService {
  public async execute({
    nome,
    idade,
    sexo,
    telefone,
    email,
  }: IRequest): Promise<Inquilino> {
    const inquilinosRepository = getCustomRepository(InquilinosRepository);
    const emailExists = await inquilinosRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const inquilino = inquilinosRepository.create({
      nome,
      idade,
      sexo,
      telefone,
      email,
    });

    await inquilinosRepository.save(inquilino);

    return inquilino;
  }
}

export default CreateInquilinosService;
