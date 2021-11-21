// build your `Project` model here
const db = require('../../data/dbConfig')

function findAll() {
    return db('projects')
}

const getById = (id) => {
    return db('projects')
    .where('project_id',id)
    .first()
  }
  
const create = async project => {
    const [id] = await db('projects').insert(project) 
    return getById(id)
  }

module.exports = {

    findAll,
    getById,
    create
}