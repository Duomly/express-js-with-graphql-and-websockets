const expenses = require('../data/expenses');

const getExpenses = () => {
  return expenses;
}

const resolvers = {
  expenses: () => {
    return getExpenses();
  },
};

export default resolvers;