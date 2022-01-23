import { IDespesaUnidade } from '../domain/models/IDespesaUnidade';
import { IGetDespesaVencida } from '../domain/models/IGetDespesaVencida';
import { IDespesaUnidadeRepository } from '../domain/repositories/IDespesaUnidadeRepository';

class GetDespesaVencidaService {
  constructor(private despesaUnidadeRepository: IDespesaUnidadeRepository) {}

  public async execute({
    data,
  }: IGetDespesaVencida): Promise<IDespesaUnidade[]> {
    const despesaVencida = await this.despesaUnidadeRepository.find();

    const dateFormated = data.split('/').reverse().join('-');

    const despesa = despesaVencida.filter(
      (despesa) => despesa.vencimento_fatura < new Date(dateFormated)
    );

    return despesa;
  }
}

export default GetDespesaVencidaService;
