import { Request, Response } from 'express';
import CreateDespesaUnidadeService from '../../../services/CreateDespesaUnidadeService';
import GetDespesaVencidaService from '../../../services/GetDespesaVencidaService';
import ListDespesasUnidadesService from '../../../services/ListDespesasUnidadesService';
import ShowDespesasUnidadesService from '../../../services/ShowDespesasUnidadesService';
import UpdateDespesaUnidadeService from '../../../services/UpdateDespesaUnidadeService';
import DespesasUnidadesRepository from '../../typeorm/repositories/DespesasUnidadesRepository';

export default class DespesasUnidadesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRepository = new DespesasUnidadesRepository();
    const listDespesas = new ListDespesasUnidadesService(listRepository);

    const despesasUnidades = await listDespesas.execute();

    return response.json(despesasUnidades);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showDespesaRepository = new DespesasUnidadesRepository();
    const showDespesa = new ShowDespesasUnidadesService(showDespesaRepository);
    const unidade_id = request.params.id;

    const despesa = await showDespesa.execute({ unidade_id });

    return response.json(despesa);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura,
      status_pagamento,
      unidade_id,
    } = request.body;

    const despesasRepository = new DespesasUnidadesRepository();

    const createDespesaUnidade = new CreateDespesaUnidadeService(
      despesasRepository
    );

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura,
      status_pagamento,
      unidade_id,
    } = request.body;

    const dateFormated = vencimento_fatura.split('/').reverse().join('-');

    const updateDespesaRepository = new DespesasUnidadesRepository();
    const updateDespesa = new UpdateDespesaUnidadeService(
      updateDespesaRepository
    );

    const despesa = await updateDespesa.execute({
      id,
      descricao,
      tipo_despesa,
      valor,
      vencimento_fatura: dateFormated,
      status_pagamento,
      unidade_id,
    });

    return response.json(despesa);
  }

  public async getDespesaVencida(
    request: Request,
    response: Response
  ): Promise<Response> {
    const despesaVencidaRepository = new DespesasUnidadesRepository();
    const despesaVencida = new GetDespesaVencidaService(
      despesaVencidaRepository
    );
    const { data } = request.body;

    const despesa = await despesaVencida.execute({ data });

    return response.json(despesa);
  }
}
