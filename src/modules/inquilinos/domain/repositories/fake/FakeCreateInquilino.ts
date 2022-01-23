import { v4 as uuidv4 } from 'uuid';
import { ICreateInquilino } from '@modules/inquilinos/domain/models/ICreateInquilino';
import { IInquilinoRepository } from '@modules/inquilinos/domain/repositories/IInquilinoRepository';
import Inquilino from '@modules/inquilinos/infra/typeorm/entities/Inquilino';

class FakeInquilinosRepository implements IInquilinoRepository {
  private inquilinos: Inquilino[] = [];

  async find(): Promise<Inquilino[]> {
    const inquilinos = await this.inquilinos.map((inquilino) => inquilino);

    return inquilinos;
  }

  async create({
    nome,
    idade,
    sexo,
    telefone,
    email,
  }: ICreateInquilino): Promise<Inquilino> {
    const inquilino = new Inquilino();

    inquilino.id = uuidv4();
    inquilino.nome = nome;
    inquilino.idade = idade;
    inquilino.sexo = sexo;
    inquilino.telefone = telefone;
    inquilino.email = email;

    this.inquilinos.push(inquilino);

    return inquilino;
  }
  async save(inquilino: Inquilino): Promise<Inquilino> {
    Object.assign(this.inquilinos, inquilino);
    return inquilino;
  }
  public async findByEmail(email: string): Promise<Inquilino | undefined> {
    const inquilino = this.inquilinos.find(
      (inquilino) => inquilino.email === email
    );
    return inquilino;
  }
}

export default FakeInquilinosRepository;
