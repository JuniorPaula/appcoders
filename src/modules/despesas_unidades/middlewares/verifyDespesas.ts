import { celebrate, Joi, Segments } from 'celebrate';

export const despesasCreateVerify = celebrate({
  [Segments.BODY]: {
    descricao: Joi.string().required(),
    tipo_despesa: Joi.string().required(),
    valor: Joi.number().precision(2).required(),
    vencimento_fatura: Joi.required(),
    status_pagamento: Joi.boolean().required(),
    unidade_id: Joi.string().required(),
  },
});
