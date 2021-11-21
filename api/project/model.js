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

const getById = async (id) => {
    return await db('projects')
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

    const check_newPost = await getById(id)

    const new_return = {
      "project_id": check_newPost.project_id,
      "project_name": check_newPost.project_name,
      "project_description": check_newPost.project_description,
      "project_completed": check_newPost.project_completed == 0 ? false : true
    }

    return new_return
  }

module.exports = {
    findAll,
    getById,
    create
}