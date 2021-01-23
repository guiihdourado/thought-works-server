import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import AccountsRepository from '../repositories/AccountsRepository';

import CreateDynamicLinkService from '../services/CreateDynamicLinkService';

const linksRouter = Router();

linksRouter.post('/', async (request, response) => {
  const { slug } = request.body;
  const createDynamicLink = new CreateDynamicLinkService();
  const accountsRepository = getCustomRepository(AccountsRepository);

  const dynamicLink = await createDynamicLink.execute({ name: slug });

  const account = await accountsRepository.findOne({
    where: {
      slug
    }
  });

  await accountsRepository.save({
    ...account,
    firebase_link: dynamicLink
  });

  return response.json(dynamicLink);
});

export default linksRouter;
