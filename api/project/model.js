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
  
const create = async newpost => {

  const new_Project = {
            "project_id": newpost.project_id,
            "project_name": newpost.project_name,
            "project_description": newpost.project_description,
            "project_completed": newpost.project_completed == false ? 0 : 1
          }

    const [id] = await db('projects').insert(new_Project) 
    return getById(id)
  }

module.exports = {
    findAll,
    getById,
    create
}