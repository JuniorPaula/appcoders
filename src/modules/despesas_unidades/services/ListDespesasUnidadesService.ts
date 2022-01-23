import { getCustomRepository } from 'typeorm';
import DespesaUnidade from '../infra/typeorm/entities/DespesaUnidade';
import DespesasUnidadesRepository from '../infra/typeorm/repositories/DespesasUnidadesRepository';

class ListDespesasUnidadesService {
  public async execute(): Promise<DespesaUnidade[]> {
    const despesaUnidadeRepository = getCustomRepository(
      DespesasUnidadesRepository
    );

    const despesasUnidades = await despesaUnidadeRepository.find();

    return despesasUnidades;
  }
}

export default ListDespesasUnidadesService;
