import { v4 as uuidv4 } from 'uuid';
import { ICreateDespesaUnidade } from '@modules/despesas_unidades/domain/models/ICreateDespesaUnidade';
import { IDespesaUnidadeRepository } from '@modules/despesas_unidades/domain/repositories/IDespesaUnidadeRepository';
import DespesaUnidade from '@modules/despesas_unidades/infra/typeorm/entities/DespesaUnidade';

class DespesasUnidadesRepository implements IDespesaUnidadeRepository {
  private despesas: DespesaUnidade[] = [];

  public async create({
    descricao,
    tipo_despesa,
    valor,
    vencimento_fatura,
    status_pagamento,
    unidade_id,
  }: ICreateDespesaUnidade): Promise<DespesaUnidade> {
    const despesa = new DespesaUnidade();
    despesa.id = uuidv4();
    despesa.descricao = descricao;
    despesa.tipo_despesa = tipo_despesa;
    despesa.valor = valor;
    despesa.vencimento_fatura = vencimento_fatura;
    despesa.status_pagamento = status_pagamento;
    despesa.unidade_id = unidade_id;

    this.despesas.push(despesa);
    return despesa;
  }

  public async save(despesa: DespesaUnidade): Promise<DespesaUnidade> {
    const findIndex = this.despesas.findIndex(
      (findDespesas) => findDespesas.id === despesa.id
    );

    this.despesas[findIndex] = despesa;

    return despesa;
  }

  public async find(): Promise<DespesaUnidade[]> {
    const despesas = await this.despesas.map((despesa) => despesa);

    return despesas;
  }

  public async findByIUnidade(
    unidade_id: string
  ): Promise<DespesaUnidade | undefined> {
    const despesa = this.despesas.find(
      (despesa) => despesa.unidade_id === unidade_id
    );

    return despesa;
  }

  public async findById(id: string): Promise<DespesaUnidade | undefined> {
    const despesa = this.despesas.find((despesa) => despesa.id === id);

    return despesa;
  }
}

export default DespesasUnidadesRepository;
