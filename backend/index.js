const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const messageRoute = require('./routes/messages.route');

const app = express();

//Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/v1/messages', messageRoute);

module.exports = app;
