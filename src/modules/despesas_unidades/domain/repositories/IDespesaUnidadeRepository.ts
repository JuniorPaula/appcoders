import { ICreateDespesaUnidade } from '../models/ICreateDespesaUnidade';
import { IDespesaUnidade } from '../models/IDespesaUnidade';

export interface IDespesaUnidadeRepository {
  findByIUnidade(unidade_id: string): Promise<IDespesaUnidade | undefined>;
  findById(id: string): Promise<IDespesaUnidade | undefined>;
  create(data: ICreateDespesaUnidade): Promise<IDespesaUnidade>;
  save(despesa: IDespesaUnidade): Promise<IDespesaUnidade>;
  find(): Promise<IDespesaUnidade[]>;
}
