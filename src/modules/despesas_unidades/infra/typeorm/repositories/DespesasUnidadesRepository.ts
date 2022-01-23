import { ICreateDespesaUnidade } from '@modules/despesas_unidades/domain/models/ICreateDespesaUnidade';
import { IDespesaUnidadeRepository } from '@modules/despesas_unidades/domain/repositories/IDespesaUnidadeRepository';
import { getRepository, Repository } from 'typeorm';
import DespesaUnidade from '../entities/DespesaUnidade';

class DespesasUnidadesRepository implements IDespesaUnidadeRepository {
  private ormRepository: Repository<DespesaUnidade>;
  constructor() {
    this.ormRepository = getRepository(DespesaUnidade);
  }

  public async create({
    descricao,
    tipo_despesa,
    valor,
    vencimento_fatura,
    status_pagamento,
    unidade_id,
  }: ICreateDespesaUnidade): Promise<DespesaUnidade> {
    const despesa = this.ormRepository.create({
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura,
      status_pagamento,
      unidade_id,
    });

    await this.ormRepository.save(despesa);

    return despesa;
  }

  public async save(despesa: DespesaUnidade): Promise<DespesaUnidade> {
    await this.ormRepository.save(despesa);

    return despesa;
  }

  public async find(): Promise<DespesaUnidade[]> {
    const despesa = await this.ormRepository.find();

    return despesa;
  }

  public async findByIUnidade(
    unidade_id: string
  ): Promise<DespesaUnidade | undefined> {
    const despesa = await this.ormRepository.findOne({
      where: {
        unidade_id,
      },
    });

    return despesa;
  }

  public async findById(id: string): Promise<DespesaUnidade | undefined> {
    const despesa = await this.ormRepository.findOne({ where: { id } });

    return despesa;
  }
}

export default DespesasUnidadesRepository;
