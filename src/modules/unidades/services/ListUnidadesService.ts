import { getCustomRepository } from 'typeorm';
import Unidade from '../infra/typeorm/entities/Unidade';
import UnidadesRepository from '../infra/typeorm/repositories/UnidadesRepository';

class ListUnidadesService {
  public async execute(): Promise<Unidade[]> {
    const unidadesRepository = getCustomRepository(UnidadesRepository);

    const unidades = await unidadesRepository.find();
    return unidades;
  }
}

export default ListUnidadesService;
