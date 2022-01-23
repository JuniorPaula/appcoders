import AppError from '@shared/errors/AppError';
import { IDespesaUnidade } from '../domain/models/IDespesaUnidade';
import { IShowDespesaunidade } from '../domain/models/IShowDespesaUnidade';
import { IDespesaUnidadeRepository } from '../domain/repositories/IDespesaUnidadeRepository';

class ShowDespesasUnidadesService {
  constructor(private despesaUnidadeRepository: IDespesaUnidadeRepository) {}

  public async execute({
    unidade_id,
  }: IShowDespesaunidade): Promise<IDespesaUnidade> {
    const despesa = await this.despesaUnidadeRepository.findByIUnidade(
      unidade_id
    );

    if (!despesa) {
      throw new AppError('Despesa not found.');
    }

    return despesa;
  }
}

export default ShowDespesasUnidadesService;
