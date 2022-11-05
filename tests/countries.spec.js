const {getCountries} = require('../helpers/countries.helper')
const {expect} = require('chai')

describe('Get Contries', function () {
    let response

    before(async function() {
        response = await getCountries()
    })

    it('Response status code is 200', function () {
     expect(response.statusCode).to.eq(200)
    })

    it('Response body contains array of strings with length 2', function () {
      for (const country of response.body) {
          expect(country.length).to.eq(2)
          expect(country).to.be.a('string')
      }
    })
})