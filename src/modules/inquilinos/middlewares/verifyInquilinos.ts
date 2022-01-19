import { celebrate, Joi, Segments } from 'celebrate';

export const inquilinosCreateVerify = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    idade: Joi.number().required(),
    sexo: Joi.string().required(),
    telefone: Joi.string().required(),
    email: Joi.string().email().required(),
  },
});
