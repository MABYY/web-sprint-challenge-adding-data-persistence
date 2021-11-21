// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')
const Projects = require('../project/model')


router.get('/', async (req,res,next) => {
    try{
        const tasks = await Tasks.findAll()
        res.status(200).json(tasks)

    } catch(next) {

    }
})

router.get('/:id', async (req,res,next) => {
    try{
        const task = await Tasks.getById(req.params.id)
        res.status(200).json(task)
    } catch(next) {

    }
})

router.post('/', async (req,res,next) => {
    try{
        const { task_description , project_id } = req.body
        if ( !task_description || !project_id) {
            res.status(400).json({
                message: "Task description  or project id is missing"
            }) 

        } else if( typeof project_id == 'string'){
            res.status(415).json({
                message: " The project_id does not exist"
            }) 
        } else { 
            const newTask = await Tasks.create(req.body)
            res.status(201).json(newTask)}

    } catch (next) {

    }
})

router.use ('/', (error,req,res,next) => {
    res.status(error.status || 500).json({
        server_message:"Something went wrong - tasks",
        message: error.message
    })
})

module.exports = router;