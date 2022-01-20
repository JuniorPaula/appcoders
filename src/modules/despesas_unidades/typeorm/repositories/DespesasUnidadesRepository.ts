import { EntityRepository, Repository } from 'typeorm';
import DespesaUnidade from '../entities/DespesaUnidade';

@EntityRepository(DespesaUnidade)
class DespesasUnidadesRepository extends Repository<DespesaUnidade> {
  public async findByIUnidade(
    unidade_id: string
  ): Promise<DespesaUnidade | undefined> {
    const despesa = await this.findOne({
      where: {
        unidade_id,
      },
    });

    return despesa;
  }
}

export default DespesasUnidadesRepository;
