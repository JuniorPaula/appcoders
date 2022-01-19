import { Request, Response } from 'express';
import CreateUnidadesService from '../services/CreateUnidadesService';

export default class UnidadesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { identificacao, proprietario, condominio, endereco } = request.body;

    const createUnidade = new CreateUnidadesService();

    const unidade = await createUnidade.execute({
      identificacao,
      proprietario,
      condominio,
      endereco,
    });

    return response.json(unidade);
  }
}
