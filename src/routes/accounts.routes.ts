import { Router } from 'express';
import kebabCase from 'lodash/kebabCase';
import { getCustomRepository } from 'typeorm';

import AccountsRepository from '../repositories/AccountsRepository';

const accountsRouter = Router();

accountsRouter.get('/', async (request, response) => {
  const accountsRepository = getCustomRepository(AccountsRepository);
  
  const accounts = await accountsRepository.find();

  const filterAccounts = accounts.filter(account => account.firebase_link !== undefined);

  return response.json(filterAccounts);
});

accountsRouter.post('/', async (request, response) => {
  const { name } = request.body;
  const accountsRepository = getCustomRepository(AccountsRepository);

  const slug = kebabCase(name);
  
  const account = await accountsRepository.createAndSave({ name, slug });

  return response.json(account);
});

export default accountsRouter;
