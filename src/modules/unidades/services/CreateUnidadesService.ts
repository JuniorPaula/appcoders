import AppError from '@shared/errors/AppError';
import { ICreateUnidade } from '../domain/models/ICreateUnidade';
import { IUnidade } from '../domain/models/IUnidade';
import { IunidadeRepository } from '../domain/repositories/IUnidadeRepository';

class CreateUnidadesService {
  constructor(private unidadeRepository: IunidadeRepository) {}

  public async execute({
    identificacao,
    proprietario,
    condominio,
    endereco,
  }: ICreateUnidade): Promise<IUnidade> {
    const unidadeExists = await this.unidadeRepository.findByIdentify(
      identificacao
    );

    if (unidadeExists) {
      throw new AppError('Unity identify already exists.');
    }

    const unidade = await this.unidadeRepository.create({
      identificacao,
      proprietario,
      condominio,
      endereco,
    });

    return unidade;
  }
}

export default CreateUnidadesService;
