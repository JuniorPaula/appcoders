import { Router } from 'express';
import DespesasUnidadesController from '../controllers/DespesasUnidadesController';
import { despesasCreateVerify } from '../../../middlewares/verifyDespesas';

const despesasUnidadesRoutes = Router();

const despesasUnidadesController = new DespesasUnidadesController();

despesasUnidadesRoutes.get(
  '/filters',
  despesasUnidadesController.getDespesaVencida
);

despesasUnidadesRoutes.get('/', despesasUnidadesController.index);

despesasUnidadesRoutes.post(
  '/',
  despesasCreateVerify,
  despesasUnidadesController.create
);

despesasUnidadesRoutes.put(
  '/:id',
  despesasCreateVerify,
  despesasUnidadesController.update
);

despesasUnidadesRoutes.get('/:id', despesasUnidadesController.show);

export default despesasUnidadesRoutes;
