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
        const projectExists = await Projects.getById(project_id)

        if ( !task_description ) {
            res.status(400).json({
                message: "Task description  or project id is missing"
            }) 

        } 
        else if( !project_id){
            res.status(422).json({
                message: " Project must be valid"
            }) 
        } 
        else if( !projectExists|| !typeof project_id == 'number'){
            res.status(422).json({
                message: " Project must be valid"
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