const mongoose = require('mongoose');
const { mongo } = require('../config');

mongoose.start = function () {
  mongoose.connect(
    process.env.MONGODB_URI || `mongodb://${mongo.url}:${mongo.port}`,
    mongo.options,
  );

  this.connection = mongoose.connection;
  this.connection.on('error', console.error.bind(console, 'connection error:'));
  this.connection.once('open', console.error.bind(console, 'Succesfully conected to mongodb'));
};

module.exports = mongoose;
