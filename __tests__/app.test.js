'use strict';

const app = require('../app.js');
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');

//runs our app through a mock server via supertest.  aka we don't need the actual server running to run the tests.
const request = supertest(app);

describe('Testing Express Server', () => {

  it('Should respond with a string on POST /talk', async () => {

    let param = 'i am some some words';

    let response = await request.post('/talk'.send({
      words: param,
    }));

    expect(response.status).toBe(200);
    expect(typeof(response.text)).toBe('string');
    expect(response.text).toBe(param);

  });

  it('Should respond with a string on GET /repeat', async () => {

    let response = await request.get('/repeat');
    
    expect(response.status).toBe(200);
    expect(typeof(response.text)).toBe('string');

  });

});