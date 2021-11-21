// build your `Project` model here
const db = require('../../data/dbConfig')

function findAll() {
    return db('projects')
}

module.exports = {

    findAll
}