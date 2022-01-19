import { Router } from 'express';
import InquilinosController from '../controllers/InquilinosController';
import { inquilinosCreateVerify } from '../middlewares/verifyInquilinos';

const inquilinosRoutes = Router();

const inquilinosController = new InquilinosController();

inquilinosRoutes.get('/', inquilinosController.index);
inquilinosRoutes.post('/', inquilinosCreateVerify, inquilinosController.create);

export default inquilinosRoutes;
