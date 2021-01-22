import { Router } from 'express';
import kebabCase from 'lodash/kebabCase';
import { getCustomRepository } from 'typeorm';

import AccountsRepository from '../repositories/AccountsRepository';

import CreateDynamicLinkService from '../services/CreateDynamicLinkService';

const accountsRouter = Router();

accountsRouter.get('/', async (request, response) => {
  const accountsRepository = getCustomRepository(AccountsRepository);
  
  const accounts = await accountsRepository.find();

  return response.json(accounts);
});

accountsRouter.post('/', async (request, response) => {
  const { name } = request.body;
  const accountsRepository = getCustomRepository(AccountsRepository);

  const slug = kebabCase(name);
  
  const account = await accountsRepository.createAndSave({ name, slug });

  return response.json(account);
});

export default accountsRouter;
