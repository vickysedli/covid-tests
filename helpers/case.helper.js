const supertest =require('supertest')
require('dotenv/config')

async function getCase(code) {
    return supertest(process.env.BASE_URL)
        .get(`/country/${code}`)
}

module.exports = {getCase}