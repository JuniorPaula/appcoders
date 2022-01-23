import { ICreateUnidade } from '../models/ICreateUnidade';
import { IUnidade } from '../models/IUnidade';

export interface IunidadeRepository {
  findByIdentify(identificacao: string): Promise<IUnidade | undefined>;
  findById(id: string): Promise<IUnidade | undefined>;
  find(): Promise<IUnidade[]>;
  create(data: ICreateUnidade): Promise<IUnidade>;
  save(unidade: IUnidade): Promise<IUnidade>;
}
