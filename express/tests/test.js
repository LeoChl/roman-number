const app = require('../app.js');
const request = require('supertest');

describe('Roman numerals', () => {
    it('POST /roman-numerals should convert number', (done) => {
        request(app).post('/roman-numerals').set('Accept', 'application/json')
            .send({ 'number': 2 })
            .expect(200)
            .then(response => {
                expect(response.body.number).toEqual('II');
                done();
            })
            .catch(err => done(err))
    });

    it('POST /roman-numerals should refuse invalid property', (done) => {
        request(app).post('/roman-numerals').set('Accept', 'application/json')
            .send({ 'numbers': 4 })
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual('Invalid body, allowed property: number');
                done();
            })
            .catch(err => done(err))
    });

    it('POST /roman-numerals should refuse string', (done) => {
        request(app).post('/roman-numerals').set('Accept', 'application/json')
            .send({ 'number': "A4" })
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual('Wrong format');
                done();
            })
            .catch(err => done(err))
    });

    it('POST /roman-numerals should refuse number outside allowed range', (done) => {
        request(app).post('/roman-numerals').set('Accept', 'application/json')
            .send({ 'number': 0 })
            .expect(400)
            .then(response => {
                expect(response.body.message).toEqual('The number is not within authorized range (1 - 100).\ ' +
                    'Zero does not have its own Roman numeral');
                done();
            })
            .catch(err => done(err))
    });
});