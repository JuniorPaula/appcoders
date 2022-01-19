import inquilinosRoutes from '@modules/inquilinos/routes/inquilinosRoutes';
import { Router } from 'express';

const routes = Router();

routes.use('/inquilinos', inquilinosRoutes);

export default routes;
