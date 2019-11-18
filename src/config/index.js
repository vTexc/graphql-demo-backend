module.exports = {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 4000,
  },
  graphql: {
    rootPath: process.env.GRAPHQL_PATH,
    subscriptionsPath: process.env.GRAPHQL_WS_PATH,
  },
  mongo: {
    url: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    options: {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      dbName: process.env.MONGO_DB || 'demo',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
};
