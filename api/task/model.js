// build your `Task` model here
const db = require('../../data/dbConfig')

async function findAll() {
    const result =  await db('tasks as t')
                        .leftJoin("projects as p", "t.project_id", "=","p.project_id")
                        .select('t.task_id',
                                "t.task_description" ,
                                't.task_notes',
                                't.task_completed',
                                'p.project_name',
                                'p.project_description'
                                )
    const result_array = !result[0].task_id ? [] :
                    result.map(row =>{

                    return {
                        "task_id": row.task_id,
                        "task_description": row.task_description,
                        "task_notes":row.task_notes,
                        "task_completed":row.task_notes == 0? false : true,
                        "project_name":row.project_name,
                        "project_description":row.project_description
                
                    }
            })

   return result_array
  

}

const getById = (id) => {
    return db('tasks')
    .where('task_id',id)
    .first()
  }
  
const create = async task => {

       const create_task = {
           "task_description": task.task_description,
           "task_notes":task.task_notes,
           "task_completed":task.task_completed == true? 1:0,
           "project_id":task.project_id
        }
    const [id] = await db('tasks').insert(create_task) 
    return getById(id)
  }

module.exports = {
    findAll,
    getById,
    create
}