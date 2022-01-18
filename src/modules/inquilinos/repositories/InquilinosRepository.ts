import { EntityRepository, Repository } from 'typeorm';
import Inquilino from '../typeorm/entities/Inquilino';

@EntityRepository(Inquilino)
class InquilinosRepository extends Repository<Inquilino> {
  public async findByEmail(email: string): Promise<Inquilino | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export default InquilinosRepository;
