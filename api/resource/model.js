// build your `Resource` model here

const db = require('../../data/dbConfig')

function findAll() {
    return db('resources')
}

const getById = (id) => {
    return db('resources')
    .where('resource_id',id)
    .first()
  }
  
const create = async resource => {
    const [id] = await db('resources').insert(resource) 
    return getById(id)
  }
module.exports = {

    findAll,
    getById,
    create
}