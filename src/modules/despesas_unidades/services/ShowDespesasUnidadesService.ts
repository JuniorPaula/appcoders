import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import DespesaUnidade from '../typeorm/entities/DespesaUnidade';
import DespesasUnidadesRepository from '../typeorm/repositories/DespesasUnidadesRepository';

interface IRequest {
  unidade_id: string;
}

class ShowDespesasUnidadesService {
  public async execute({ unidade_id }: IRequest): Promise<DespesaUnidade> {
    const despesaUnidadeRepository = getCustomRepository(
      DespesasUnidadesRepository
    );

    const despesa = await despesaUnidadeRepository.findByIUnidade(unidade_id);

    if (!despesa) {
      throw new AppError('Despesa not found.');
    }

    return despesa;
  }
}

export default ShowDespesasUnidadesService;
