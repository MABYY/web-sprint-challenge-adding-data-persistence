// build your `Task` model here
const db = require('../../data/dbConfig')

function findAll() {
    return db('tasks')
}

const getById = (id) => {
    return db('tasks')
    .where('task_id',id)
    .first()
  }
  
const create = async task => {
    const [id] = await db('tasks').insert(task) 
    return getById(id)
  }

module.exports = {
    findAll,
    getById,
    create
}