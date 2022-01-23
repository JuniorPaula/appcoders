import Inquilino from '../infra/typeorm/entities/Inquilino';
import { IInquilinoRepository } from '../domain/repositories/IInquilinoRepository';

class ListInquilinosService {
  constructor(private inquilinoRepository: IInquilinoRepository) {}

  public async execute(): Promise<Inquilino[]> {
    const inquilinos = await this.inquilinoRepository.find();
    return inquilinos;
  }
}

export default ListInquilinosService;
