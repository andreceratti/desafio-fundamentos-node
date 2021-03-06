import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    if (type !== 'income' && type !== 'outcome') {
      throw Error('Incorrect type of transaction!');
    }

    const balance = this.transactionsRepository.getBalance();
    if (value > balance.total && type === 'outcome') {
      throw Error('Not enought money!');
    }

    const transaction = this.transactionsRepository.create({
      type,
      value,
      title,
    });

    return transaction;
  }
}

export default CreateTransactionService;
