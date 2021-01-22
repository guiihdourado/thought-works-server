import { EntityRepository, Repository } from 'typeorm';
import Account from '../schemas/Account';

interface CreateData {
  name: string;
  slug: string;
}

@EntityRepository(Account)
class AccountsRepository extends Repository<Account> {
  public async createAndSave(data: CreateData): Promise<Account | null> {
    const account = this.create(data);

    await this.save(account);

    return account;
  }
}

export default AccountsRepository;
