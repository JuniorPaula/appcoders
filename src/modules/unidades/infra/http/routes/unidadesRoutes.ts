import { Router } from 'express';
import UnidadesController from '../controllers/UnidadesController';
import { unidadesCreateVerify } from '../../../middlewares/vefifyUnidades';

const unidadesRoutes = Router();

const unidadesController = new UnidadesController();

unidadesRoutes.get('/', unidadesController.index);
unidadesRoutes.post('/', unidadesCreateVerify, unidadesController.create);

export default unidadesRoutes;
