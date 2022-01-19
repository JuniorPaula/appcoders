import { celebrate, Joi, Segments } from 'celebrate';

export const unidadesCreateVerify = celebrate({
  [Segments.BODY]: {
    identificacao: Joi.string().required(),
    proprietario: Joi.string().required(),
    condominio: Joi.number().required(),
    endereco: Joi.string().required(),
  },
});
