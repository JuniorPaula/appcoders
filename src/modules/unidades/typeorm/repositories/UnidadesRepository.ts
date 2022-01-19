import { EntityRepository, Repository } from 'typeorm';
import Unidade from '../entities/Unidade';

@EntityRepository(Unidade)
class UnidadesRepository extends Repository<Unidade> {
  public async findByIdentify(
    identificacao: string
  ): Promise<Unidade | undefined> {
    const unidade = await this.findOne({
      where: {
        identificacao,
      },
    });

    return unidade;
  }
}

export default UnidadesRepository;
