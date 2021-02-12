import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from 'typeDefs';
import resolvers from 'resolvers';

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
