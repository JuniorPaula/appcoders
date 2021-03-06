import despesasUnidadesRoutes from '@modules/despesas_unidades/infra/http/routes/despesasUnidadesRoutes';
import inquilinosRoutes from '@modules/inquilinos/infra/http/routes/inquilinosRoutes';
import unidadesRoutes from '@modules/unidades/infra/http/routes/unidadesRoutes';
import { Router } from 'express';

const routes = Router();

routes.use('/inquilinos', inquilinosRoutes);
routes.use('/unidades', unidadesRoutes);
routes.use('/despesas', despesasUnidadesRoutes);

export default routes;
