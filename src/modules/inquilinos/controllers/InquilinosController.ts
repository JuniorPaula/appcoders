import { Request, Response } from 'express';
import CreateInquilinosService from '../services/CreateInquilinosService';
import ListInquilinosService from '../services/ListInquilinosService';

export default class InquilinosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listInquilinos = new ListInquilinosService();

    const inquilinos = await listInquilinos.execute();

    return response.json(inquilinos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, idade, sexo, telefone, email } = request.body;

    const createInquilino = new CreateInquilinosService();

    const inquilino = await createInquilino.execute({
      nome,
      idade,
      sexo,
      telefone,
      email,
    });

    return response.json(inquilino);
  }
}
