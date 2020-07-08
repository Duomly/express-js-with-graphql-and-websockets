import * as express from 'express';
import schema from './graphql/schema';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './graphql/resolvers';

const apollo = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
  }
});

var app = express();
apollo.applyMiddleware({ app: app });

const ws = createServer(app);
apollo.installSubscriptionHandlers(ws);

ws.listen({ port: 4000 }, () =>{
  console.log(`GraphQL API URL: http://localhost:4000/graphql`)
  console.log(`Subscriptions URL: ws://localhost:4000/graphql`)
})