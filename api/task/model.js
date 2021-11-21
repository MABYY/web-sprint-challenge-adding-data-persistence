// build your `Task` model here
const db = require('../../data/dbConfig')

function findAll() {
    return db('tasks as t')
    .leftJoin("projects as p", "t.project_id", "=","p.project_id")
    .select('t.task_id',
            "t.task_description" ,
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
            )
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