import { Request, Response } from 'express';
import CreateDespesaUnidadeService from '../services/CreateDespesaUnidadeService';

export default class DespesasUnidadesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura,
      status_pagamento,
      unidade_id,
    } = request.body;

    const createDespesaUnidade = new CreateDespesaUnidadeService();

    const dateFormated = vencimento_fatura.split('/').reverse().join('-');

    const despesaUnidade = await createDespesaUnidade.execute({
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura: dateFormated,
      status_pagamento,
      unidade_id,
    });

    return response.json(despesaUnidade);
  }
}
