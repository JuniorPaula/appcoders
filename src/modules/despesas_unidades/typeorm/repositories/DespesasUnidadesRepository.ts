import { EntityRepository, Repository } from 'typeorm';
import DespesaUnidade from '../entities/DespesaUnidade';

@EntityRepository(DespesaUnidade)
class DespesasUnidadesRepository extends Repository<DespesaUnidade> {
  public async findByIUnidade(
    unidade_id: string
  ): Promise<DespesaUnidade | undefined> {
    const despesa_unidade = await this.findOne({
      where: {
        unidade_id,
      },
    });

    return despesa_unidade;
  }
}

export default DespesasUnidadesRepository;
