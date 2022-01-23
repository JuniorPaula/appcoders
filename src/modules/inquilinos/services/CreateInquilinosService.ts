import AppError from '@shared/errors/AppError';
import { IInquilinoRepository } from '../domain/repositories/IInquilinoRepository';
import { ICreateInquilino } from '../domain/models/ICreateInquilino';
import { IInquilino } from '../domain/models/IInquilino';

class CreateInquilinosService {
  constructor(private inquilinoRepository: IInquilinoRepository) {}

  public async execute({
    nome,
    idade,
    sexo,
    telefone,
    email,
  }: ICreateInquilino): Promise<IInquilino> {
    const emailExists = await this.inquilinoRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const inquilino = await this.inquilinoRepository.create({
      nome,
      idade,
      sexo,
      telefone,
      email,
    });

    return inquilino;
  }
}

export default CreateInquilinosService;
