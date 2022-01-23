import { IUnidade } from '../domain/models/IUnidade';
import { IunidadeRepository } from '../domain/repositories/IUnidadeRepository';

class ListUnidadesService {
  constructor(private unidadeRepository: IunidadeRepository) {}
  public async execute(): Promise<IUnidade[]> {
    const unidades = await this.unidadeRepository.find();
    return unidades;
  }
}

export default ListUnidadesService;
