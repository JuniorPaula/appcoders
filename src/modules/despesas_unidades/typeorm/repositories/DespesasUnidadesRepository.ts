import { EntityRepository, Repository } from 'typeorm';
import DespesaUnidade from '../entities/DespesaUnidade';

@EntityRepository(DespesaUnidade)
class DespesasUnidadesRepository extends Repository<DespesaUnidade> {
  public async findByIType(
    tipo_despesa: string
  ): Promise<DespesaUnidade | undefined> {
    const despesa_unidade = await this.findOne({
      where: {
        tipo_despesa,
      },
    });

    return despesa_unidade;
  }
}

export default DespesasUnidadesRepository;
