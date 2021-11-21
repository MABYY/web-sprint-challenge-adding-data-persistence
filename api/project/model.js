// build your `Project` model here
const db = require('../../data/dbConfig')

async function findAll() {
  const result =  await db('projects')

  const new_Project = !result[0].project_id ? [] : 
        result.map(row => {
          return {
            "project_id": row.project_id,
            "project_name": row.project_name,
            "project_description": row.project_description,
            "project_completed": row.project_completed ==0 ? false : true
          }
        })

  return new_Project
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