import { IDespesaUnidade } from '../domain/models/IDespesaUnidade';
import { IDespesaUnidadeRepository } from '../domain/repositories/IDespesaUnidadeRepository';

class ListDespesasUnidadesService {
  constructor(private despesaUnidadeRepository: IDespesaUnidadeRepository) {}

  public async execute(): Promise<IDespesaUnidade[]> {
    const despesasUnidades = await this.despesaUnidadeRepository.find();

    return despesasUnidades;
  }
}

export default ListDespesasUnidadesService;
