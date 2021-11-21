// build your `Resource` model here

const db = require('../../data/dbConfig')

function findAll() {
    return db('resources')
}

module.exports = {

    findAll
}