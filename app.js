const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const moment = require('moment');
const fs = require('fs/promises');
const path = require('path');
require('dotenv').config();

const {
  authRouter,
  contactsRouter,
  usereventRouter,
  eventsRouter,
} = require('./routes');

const app = express();

app.use(async (req, res, next) => {
  const { method, url } = req;
  const data = moment().format('DD-MM-YYYY_hh:mm:ss');
  await fs.appendFile('./public/server.log', `\n${method} ${url} ${data}`);
  next();
});
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/events', eventsRouter);
app.use('/userevent', usereventRouter);
app.use('/users', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
