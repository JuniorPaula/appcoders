import { ICreateUnidade } from '@modules/unidades/domain/models/ICreateUnidade';
import { IunidadeRepository } from '@modules/unidades/domain/repositories/IUnidadeRepository';
import { getRepository, Repository } from 'typeorm';
import Unidade from '../entities/Unidade';

class UnidadesRepository implements IunidadeRepository {
  private ormRepository: Repository<Unidade>;

  constructor() {
    this.ormRepository = getRepository(Unidade);
  }
  find(): Promise<Unidade[]> {
    const unidade = this.ormRepository.find();

    return unidade;
  }
  async create({
    identificacao,
    proprietario,
    condominio,
    endereco,
  }: ICreateUnidade): Promise<Unidade> {
    const unidade = this.ormRepository.create({
      identificacao,
      proprietario,
      condominio,
      endereco,
    });

    await this.ormRepository.save(unidade);

    return unidade;
  }
  async save(unidade: Unidade): Promise<Unidade> {
    await this.ormRepository.save(unidade);

    return unidade;
  }

  public async findByIdentify(
    identificacao: string
  ): Promise<Unidade | undefined> {
    const unidade = await this.ormRepository.findOne({
      where: {
        identificacao,
      },
    });

    return unidade;
  }

  public async findById(id: string): Promise<Unidade | undefined> {
    const unidade_id = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return unidade_id;
  }
}

export default UnidadesRepository;
