import * as express from 'express';
import {graphqlHTTP} from 'express-graphql';

import schema from './graphql/schema';
import resolvers from './graphql/resolvers';


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');