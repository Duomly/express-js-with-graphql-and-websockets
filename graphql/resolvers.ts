const expenses = require('../data/expenses');
import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

const getExpenses = () => {
  return expenses;
}

const createExpense = (args) => {
  return { id: args.id, date: args.date, amount: args.amount, type: args.type, category: args.category };
}


const resolvers = {
  Query: {
    expenses: () => {
      return getExpenses();
    },
  },
  Mutation: {
    newExpense: (root, args) => {
      const expense = createExpense(args);
      pubsub.publish('expense', { newExpenseCreated: expense });
      return expense;
    }
  },
  Subscription: {
    newExpenseCreated: {
      subscribe: () => pubsub.asyncIterator('expense')  // subscribe to changes in a topic
    }
  }
};

export default resolvers;