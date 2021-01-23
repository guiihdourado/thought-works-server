import { EntityRepository, Repository } from 'typeorm';
import Account from '../schemas/Account';

interface CreateData {
  name: string;
  slug: string;
}

@EntityRepository(Account)
class AccountsRepository extends Repository<Account> {
  public async createAndSave(data: CreateData): Promise<Account | null> {
    const account = await this.findOne({
      where: {
        slug: data.slug,
      }
    });

    if (account) {
      return account;
    }

    const createAccount = this.create(data);

    await this.save(createAccount);

    return createAccount;
  }
}

export default AccountsRepository;
