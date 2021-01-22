import { Router } from 'express';

import accountsRouter from './accounts.routes';
import linksRouter from './links.routes';
import notificationsRouter from './notifications.routes';

const routes = Router();

routes.use('/accounts', accountsRouter);
routes.use('/links', linksRouter);
routes.use('/notifications', notificationsRouter);

export default routes;
