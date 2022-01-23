import { EntityRepository, Repository } from 'typeorm';
import Inquilino from '../entities/Inquilino';

@EntityRepository(Inquilino)
class InquilinosRepository extends Repository<Inquilino> {
  public async findByEmail(email: string): Promise<Inquilino | undefined> {
    const inquilino = await this.findOne({
      where: {
        email,
      },
    });

    return inquilino;
  }
}

export default InquilinosRepository;
