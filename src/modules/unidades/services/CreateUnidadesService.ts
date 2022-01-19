import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Unidade from '../typeorm/entities/Unidade';
import UnidadesRepository from '../typeorm/repositories/UnidadesRepository';

interface IRequest {
  identificacao: string;
  proprietario: string;
  condominio: string;
  endereco: string;
}

class CreateUnidadesService {
  public async execute({
    identificacao,
    proprietario,
    condominio,
    endereco,
  }: IRequest): Promise<Unidade> {
    const unidadesRepository = getCustomRepository(UnidadesRepository);
    const unidadeExists = await unidadesRepository.findByIdentify(
      identificacao
    );

    if (unidadeExists) {
      throw new AppError('Unity identify already exists.');
    }

    const unidade = unidadesRepository.create({
      identificacao,
      proprietario,
      condominio,
      endereco,
    });

    await unidadesRepository.save(unidade);

    return unidade;
  }
}

export default CreateUnidadesService;
