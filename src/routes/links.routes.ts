import { Router } from 'express';

import CreateDynamicLinkService from '../services/CreateDynamicLinkService';

const linksRouter = Router();

linksRouter.post('/', async (request, response) => {
  const { slug } = request.body;
  const createDynamicLink = new CreateDynamicLinkService();

  const dynamicLink = await createDynamicLink.execute({ name: slug });

  return response.json(dynamicLink);
});

export default linksRouter;
