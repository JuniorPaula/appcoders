import UnidadesRepository from '@modules/unidades/infra/typeorm/repositories/UnidadesRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateDespesaUnidade } from '../domain/models/ICreateDespesaUnidade';
import { IDespesaUnidade } from '../domain/models/IDespesaUnidade';
import { IDespesaUnidadeRepository } from '../domain/repositories/IDespesaUnidadeRepository';

class CreateDespesaUnidadeService {
  constructor(private despesaUnidadeRepository: IDespesaUnidadeRepository) {}

  public async execute({
    descricao,
    tipo_despesa,
    valor,
    vencimento_fatura,
    status_pagamento,
    unidade_id,
  }: ICreateDespesaUnidade): Promise<IDespesaUnidade> {
    const unidadesRepository = getCustomRepository(UnidadesRepository);
    const unidadeExists = await unidadesRepository.findById(unidade_id);

    if (!unidadeExists) {
      throw new AppError('Unidade does not exist.');
    }

    const despesa_unidade = await this.despesaUnidadeRepository.create({
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura,
      status_pagamento,
      unidade_id,
    });

    return despesa_unidade;
  }
}

export default CreateDespesaUnidadeService;
