import { ICreateInquilino } from '@modules/inquilinos/domain/models/ICreateInquilino';
import { IInquilinoRepository } from '@modules/inquilinos/domain/repositories/IInquilinoRepository';
import { getRepository, Repository } from 'typeorm';
import Inquilino from '../entities/Inquilino';

class InquilinosRepository implements IInquilinoRepository {
  private ormRepository: Repository<Inquilino>;

  constructor() {
    this.ormRepository = getRepository(Inquilino);
  }

  find(): Promise<Inquilino[]> {
    const inquilino = this.ormRepository.find();

    return inquilino;
  }
  async create({
    nome,
    idade,
    sexo,
    telefone,
    email,
  }: ICreateInquilino): Promise<Inquilino> {
    const inquilino = this.ormRepository.create({
      nome,
      idade,
      sexo,
      telefone,
      email,
    });

    await this.ormRepository.save(inquilino);

    return inquilino;
  }
  async save(inquilino: Inquilino): Promise<Inquilino> {
    await this.ormRepository.save(inquilino);

    return inquilino;
  }
  public async findByEmail(email: string): Promise<Inquilino | undefined> {
    const inquilino = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return inquilino;
  }
}

export default InquilinosRepository;
