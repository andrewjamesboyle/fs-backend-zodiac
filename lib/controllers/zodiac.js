const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/zodiac', (req, res) => {
    const zodiacList = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    res.json(zodiacList);
  });

