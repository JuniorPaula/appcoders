import { getCustomRepository } from 'typeorm';
import InquilinosRepository from '../infra/typeorm/repositories/InquilinosRepository';
import Inquilino from '../infra/typeorm/entities/Inquilino';

class ListInquilinosService {
  public async execute(): Promise<Inquilino[]> {
    const inquilinosRepository = getCustomRepository(InquilinosRepository);

    const inquilinos = inquilinosRepository.find();
    return inquilinos;
  }
}

export default ListInquilinosService;
