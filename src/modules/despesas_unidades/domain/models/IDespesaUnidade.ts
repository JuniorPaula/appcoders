import Unidade from '@modules/unidades/infra/typeorm/entities/Unidade';

export interface IDespesaUnidade {
  id: string;
  descricao: string;
  tipo_despesa: string;
  valor: number;
  vencimento_fatura: Date;
  status_pagamento: boolean;
  unidade_id: string;
  unidade: Unidade;
  created_At: Date;
  updated_At: Date;
}
