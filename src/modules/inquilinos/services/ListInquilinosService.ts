import { getCustomRepository } from 'typeorm';
import InquilinosRepository from '../repositories/InquilinosRepository';
import Inquilino from '../typeorm/entities/Inquilino';

class ListInquilinosService {
  public async execute(): Promise<Inquilino[]> {
    const inquilinosRepository = getCustomRepository(InquilinosRepository);

    const inquilinos = inquilinosRepository.find();
    return inquilinos;
  }
}

export default ListInquilinosService;
