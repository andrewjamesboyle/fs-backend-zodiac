const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const zodiacDetail = zodiac.find(sign => sign.id === req.params.id);
    res.json(zodiacDetail);
  })

  .get('/', (req, res) => {
    const zodiacList = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    res.json(zodiacList);
  });

