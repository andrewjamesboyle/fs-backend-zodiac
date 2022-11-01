const express = require('express');
const app = express();

app.use('/', require('./controllers/zodiac'));

module.exports = app;
