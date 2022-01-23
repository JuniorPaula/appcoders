import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import DespesaUnidade from '../infra/typeorm/entities/DespesaUnidade';
import DespesasUnidadesRepository from '../infra/typeorm/repositories/DespesasUnidadesRepository';

interface IRequest {
  id: string;
  descricao: string;
  tipo_despesa: string;
  valor: number;
  vencimento_fatura: Date;
  status_pagamento: boolean;
  unidade_id: string;
}

class UpdateDespesaUnidadeService {
  public async execute({
    id,
    descricao,
    tipo_despesa,
    valor,
    vencimento_fatura,
    status_pagamento,
    unidade_id,
  }: IRequest): Promise<DespesaUnidade> {
    const despesasUnidadesRepository = getCustomRepository(
      DespesasUnidadesRepository
    );

    const despesa = await despesasUnidadesRepository.findById(id);

    if (!despesa) {
      throw new AppError('Despesa not found.');
    }

    despesa.descricao = descricao;
    despesa.tipo_despesa = tipo_despesa;
    despesa.valor = valor;
    despesa.vencimento_fatura = vencimento_fatura;
    despesa.status_pagamento = status_pagamento;
    despesa.unidade_id = unidade_id;

    await despesasUnidadesRepository.save(despesa);

    return despesa;
  }
}

export default UpdateDespesaUnidadeService;
