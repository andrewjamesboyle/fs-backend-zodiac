const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data');

// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });

describe('zodiac list test', () => {
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

