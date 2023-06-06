const app = require('../lib/app').app;
const request = require("supertest");

describe('Customers Test', () => {
    test('', async () => {
      await request(app)
        .get('/api/customers')
        .expect(200)
    })
  })