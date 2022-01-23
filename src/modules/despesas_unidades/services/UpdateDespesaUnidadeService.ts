import AppError from '@shared/errors/AppError';
import { IDespesaUnidade } from '../domain/models/IDespesaUnidade';
import { IUpdateDespesaUnidade } from '../domain/models/IUpdateDespesaUnidade';
import { IDespesaUnidadeRepository } from '../domain/repositories/IDespesaUnidadeRepository';

class UpdateDespesaUnidadeService {
  constructor(private despesaUnidadeRepository: IDespesaUnidadeRepository) {}

  public async execute({
    id,
    descricao,
    tipo_despesa,
    valor,
    vencimento_fatura,
    status_pagamento,
    unidade_id,
  }: IUpdateDespesaUnidade): Promise<IDespesaUnidade> {
    const despesa = await this.despesaUnidadeRepository.findById(id);

    if (!despesa) {
      throw new AppError('Despesa not found.');
    }

    despesa.descricao = descricao;
    despesa.tipo_despesa = tipo_despesa;
    despesa.valor = valor;
    despesa.vencimento_fatura = vencimento_fatura;
    despesa.status_pagamento = status_pagamento;
    despesa.unidade_id = unidade_id;

    await this.despesaUnidadeRepository.save(despesa);

    return despesa;
  }
}

export default UpdateDespesaUnidadeService;
