import { ICreateInquilino } from '../models/ICreateInquilino';
import { IInquilino } from '../models/IInquilino';

export interface IInquilinoRepository {
  findByEmail(email: string): Promise<IInquilino | undefined>;
  find(): Promise<IInquilino[]>;
  create(data: ICreateInquilino): Promise<IInquilino>;
  save(inquilino: IInquilino): Promise<IInquilino>;
}
