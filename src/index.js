require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const { server: { port, host } } = require('./config');
const { mongoHelper } = require('./utils');
const server = require('./server');

const app = express();

// initializing mongo connection
mongoHelper.start();

// middlewares
app.use(logger('dev'));

server.config(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(res.locals);
});

app.listen({
  port,
  host,
}, server.motd);
