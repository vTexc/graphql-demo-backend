module.exports = {
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 4000,
  },
  graphql: {
    rootPath: process.env.GRAPHQL_PATH,
    subscriptionsPath: process.env.GRAPHQL_WS_PATH,
  },
  mongo: {
    url: `mongodb://${process.env.MONGO_HOST || 'localhost'}`,
    database: process.env.MONGO_DB || 'demo',
    port: process.env.MONGO_PORT || 27017,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
};
