const { ApolloServer } = require('apollo-server-express');
const {
  server: { port, host },
  graphql: { rootPath }
} = require('./config');

// Construct a schema, using GraphQL schema language
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const context = require('./context');

const motd = () => console.log(`Server ready at http://${host}:${port}${rootPath}`);

const config = (app) => {
  const server = new ApolloServer({ typeDefs, resolvers, context });
  server.applyMiddleware({ app });
};

module.exports = {
  config,
  motd,
};
