// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')


router.get('/', async (req,res,next) => {
    try{
        const projects = await Projects.findAll()
        res.status(200).json(projects)

    } catch(next) {

    }
})


router.get('/:id', async (req,res,next) => {
    try{
        const project = await Projects.getById(req.params.id)
        res.status(200).json(project)
    } catch(next) {

    }
})

router.post('/', async (req,res,next) => {
    try{
        const newProject = await Projects.create(req.body)
        res.status(201).json(newProject)
    } catch (next) {

    }
})

router.use ('/', (error,req,res,next) => {
    res.status(error.status || 500).json({
        server_message:"Something went wrong - projects",
        message: error.message
    })
})

module.exports = router;