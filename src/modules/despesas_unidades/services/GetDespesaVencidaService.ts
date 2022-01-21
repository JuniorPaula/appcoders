import { getCustomRepository } from 'typeorm';
import DespesaUnidade from '../typeorm/entities/DespesaUnidade';
import DespesasUnidadesRepository from '../typeorm/repositories/DespesasUnidadesRepository';

interface IRequest {
  data: string;
}

class GetDespesaVencidaService {
  public async execute({ data }: IRequest): Promise<DespesaUnidade[]> {
    const despesaVencidaRepository = getCustomRepository(
      DespesasUnidadesRepository
    );

    const despesaVencida = await despesaVencidaRepository.find();

    const dateFormated = data.split('/').reverse().join('-');

    const despesa = despesaVencida.filter(
      (despesa) => despesa.vencimento_fatura < new Date(dateFormated)
    );

    return despesa;
  }
}

export default GetDespesaVencidaService;
