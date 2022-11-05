const supertest =require('supertest')
require('dotenv/config')

async function getCountries() {
   return supertest(process.env.BASE_URL)
       .get('/country_codes')
}

module.exports = {getCountries}