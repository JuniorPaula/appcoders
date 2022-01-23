import UnidadesRepository from '@modules/unidades/infra/typeorm/repositories/UnidadesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import DespesaUnidade from '../infra/typeorm/entities/DespesaUnidade';
import DespesasUnidadesRepository from '../infra/typeorm/repositories/DespesasUnidadesRepository';

interface IRequest {
  descricao: string;
  tipo_despesa: string;
  valor: number;
  vencimento_fatura: Date;
  status_pagamento: boolean;
  unidade_id: string;
}

class CreateDespesaUnidadeService {
  public async execute({
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

    const unidadesRepository = getCustomRepository(UnidadesRepository);
    const unidadeExists = await unidadesRepository.findById(unidade_id);

    if (!unidadeExists) {
      throw new AppError('Unidade does not exist.');
    }

    const despesa_unidade = despesasUnidadesRepository.create({
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura,
      status_pagamento,
      unidade_id,
    });

    await despesasUnidadesRepository.save(despesa_unidade);

    return despesa_unidade;
  }
}

export default CreateDespesaUnidadeService;
