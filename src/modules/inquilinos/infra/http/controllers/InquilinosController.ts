import { Request, Response } from 'express';
import CreateInquilinosService from '../../../services/CreateInquilinosService';
import ListInquilinosService from '../../../services/ListInquilinosService';
import InquilinosRepository from '../../typeorm/repositories/InquilinosRepository';

export default class InquilinosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listInquilinoReposotory = new InquilinosRepository();
    const listInquilinos = new ListInquilinosService(listInquilinoReposotory);

    const inquilinos = await listInquilinos.execute();

    return response.json(inquilinos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, idade, sexo, telefone, email } = request.body;

    const inquilinoRepository = new InquilinosRepository();
    const createInquilino = new CreateInquilinosService(inquilinoRepository);

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
