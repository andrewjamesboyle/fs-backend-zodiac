const { Router } = require('express');
const { horoscopes } = require('../zodiac-data');

module.exports = Router()
  .get('/horoscopes/:sign', (req, res) => {
    const horoscopeDetail = horoscopes.find(sign => sign.sign === req.params.sign);
    console.log('horoscopeDetail', horoscopeDetail);
    res.json(horoscopeDetail);
  });

