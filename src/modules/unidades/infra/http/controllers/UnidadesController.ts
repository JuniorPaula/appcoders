import { Request, Response } from 'express';
import CreateUnidadesService from '../../../services/CreateUnidadesService';
import ListUnidadesService from '../../../services/ListUnidadesService';
import UnidadesRepository from '../../typeorm/repositories/UnidadesRepository';

export default class UnidadesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUnidadeRepository = new UnidadesRepository();
    const listUnidades = new ListUnidadesService(listUnidadeRepository);

    const unidades = await listUnidades.execute();

    return response.json(unidades);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { identificacao, proprietario, condominio, endereco } = request.body;

    const unidadeRepository = new UnidadesRepository();
    const createUnidade = new CreateUnidadesService(unidadeRepository);

    const unidade = await createUnidade.execute({
      identificacao,
      proprietario,
      condominio,
      endereco,
    });

    return response.json(unidade);
  }
}
