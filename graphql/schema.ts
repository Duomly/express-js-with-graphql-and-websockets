var { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    expenses: [Expense]
  },
  type Expense {
    id: Int,
    date: String,
    amount: Int,
    type: String,
    category: String
  }
`);

export default schema;