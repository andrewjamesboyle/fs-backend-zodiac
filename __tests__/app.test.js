const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data');

describe('zodiac tests', () => {
  it('home route should return zodiac list', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(resp.body).toEqual(expected);
  });

  it('zodiac/:id should return sign details', async () => {
    const resp = await request(app).get('/zodiac/1');
    const aquarius = { 
      'id':'1',
      'name':'aquarius', 
      'dates':'Jan 21 - Feb 19', 
      'symbol':'Water Bearer'
    };
    expect(resp.body).toEqual(aquarius);
  });
});

describe('horoscope tests', () => {
  it('horoscopes/:sign should return horoscope', async () => {
    const resp = await request(app).get('/horoscopes/scorpio');
    const scorpio = {
      'sign': 'scorpio',
      'date': '2022-11-01',
      'horoscope': 'You may have a hard time crawling out from under the covers this morning, dear Scorpio, as the Aquarius moon forms a t-square with the nodes of fate. This cosmic climate could also lead to mood swings and disharmony within the home, so you may want to tread lightly while taking special care to nurture your heart and mind. Watch out for romantic quarrels when Luna squares off with Uranus later in the afternoon, and be sure to keep tabs on your temperament, as conflict could take unpredictable turns. Plan on spending the evening at home so you can reset after an emotionally charged day.'
    };
    expect(resp.body).toEqual(scorpio.horoscope);
  });
});

