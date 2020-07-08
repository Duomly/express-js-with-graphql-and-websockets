import { gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    expenses: [Expense]
  }

  type Mutation {
    newExpense(id: Int, date: String, amount: Int, type: String, category: String): Expense
  }

  type Subscription {
    newExpenseCreated: Expense
  }

  type Expense {
    id: Int,
    date: String,
    amount: Int,
    type: String,
    category: String
  }
`;

export default schema;