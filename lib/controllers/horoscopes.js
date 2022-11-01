const { Router } = require('express');
const { horoscopes } = require('../zodiac-data');

module.exports = Router()
  .get('/:sign', (req, res) => {
    const signDetail = horoscopes.find(sign => sign.sign === req.params.sign);
    const horoscopeDetail = signDetail.horoscope;
    res.json(horoscopeDetail);
  });

