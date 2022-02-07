const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./api-routes/roman_number');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
