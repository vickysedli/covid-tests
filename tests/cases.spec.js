const {getCountries} = require('../helpers/countries.helper')
const {expect} = require('chai')
const { getRandomValue } = require('../helpers/common.helper')
const { getCase } = require('../helpers/case.helper')

describe('Cases', async function() {
    describe('Valid country code', function() {
        let response
        let code
        let cases

        before(async function() {
            response = await getCountries()
            code = await getRandomValue(response)
            cases = await getCase(code)
        })

        it('Response status code is 200', function () {
            expect(response.statusCode).to.eq(200)
        })

        it('Response body contains country code from request', function () {
            expect(response.body[0]['Country_code']).to.eq(code)
        })
    })
})
