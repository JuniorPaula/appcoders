import { Router } from 'express';
import DespesasUnidadesController from '../controllers/DespesasUnidadesController';
import { despesasCreateVerify } from '../middlewares/verifyDespesas';

const despesasUnidadesRoutes = Router();

const despesasUnidadesController = new DespesasUnidadesController();

despesasUnidadesRoutes.get('/', despesasUnidadesController.index);

despesasUnidadesRoutes.post(
  '/',
  despesasCreateVerify,
  despesasUnidadesController.create
);

export default despesasUnidadesRoutes;
