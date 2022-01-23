export interface IUpdateDespesaUnidade {
  id: string;
  descricao: string;
  tipo_despesa: string;
  valor: number;
  vencimento_fatura: Date;
  status_pagamento: boolean;
  unidade_id: string;
}
