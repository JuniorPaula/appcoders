import inquilinosRoutes from '@modules/inquilinos/routes/inquilinosRoutes';
import unidadesRoutes from '@modules/unidades/routes/unidadesRoutes';
import { Router } from 'express';

const routes = Router();

routes.use('/inquilinos', inquilinosRoutes);
routes.use('/unidades', unidadesRoutes);

export default routes;
