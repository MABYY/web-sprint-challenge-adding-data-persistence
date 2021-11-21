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


router.use ('/', (error,req,res,next) => {
    res.status(error.status || 500).json({
        server_message:"Something went wrong - projects",
        message: error.message
    })
})

module.exports = router;