import { v4 as uuidv4 } from 'uuid';
import { ICreateUnidade } from '@modules/unidades/domain/models/ICreateUnidade';
import { IunidadeRepository } from '@modules/unidades/domain/repositories/IUnidadeRepository';
import Unidade from '@modules/unidades/infra/typeorm/entities/Unidade';

class UnidadesRepository implements IunidadeRepository {
  private unidades: Unidade[] = [];

  async find(): Promise<Unidade[]> {
    const unidades = await this.unidades.map((unidade) => unidade);

    return unidades;
  }
  async create({
    identificacao,
    proprietario,
    condominio,
    endereco,
  }: ICreateUnidade): Promise<Unidade> {
    const unidade = new Unidade();

    unidade.id = uuidv4();
    unidade.identificacao = identificacao;
    unidade.proprietario = proprietario;
    unidade.condominio = condominio;
    unidade.endereco = endereco;

    this.unidades.push(unidade);
    return unidade;
  }

  async save(unidade: Unidade): Promise<Unidade> {
    const findIndex = this.unidades.findIndex(
      (findUnidades) => findUnidades.id === unidade.id
    );

    this.unidades[findIndex] = unidade;

    return unidade;
  }

  public async findByIdentify(
    identificacao: string
  ): Promise<Unidade | undefined> {
    const unidade = this.unidades.find(
      (unidade) => unidade.identificacao === identificacao
    );

    return unidade;
  }

  public async findById(id: string): Promise<Unidade | undefined> {
    const unidade = this.unidades.find((unidade) => unidade.id === id);

    return unidade;
  }
}

export default UnidadesRepository;
