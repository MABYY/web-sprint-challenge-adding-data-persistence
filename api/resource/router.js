// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resources = require('./model')


router.get('/', async (req,res,next) => {
    try{
        const resources = await Resources.findAll()
        res.status(200).json(resources)

    } catch(next) {

    }
})

router.get('/:id', async (req,res,next) => {
    try{
        const resource = await Resources.getById(req.params.id)
        res.status(200).json(resource)
    } catch(next) {

    }
})

router.post('/', async (req,res,next) => {
    
    try{
        const new_name = await Resources.getByName(req.body.resource_name)
        if(new_name) {
            res.status(400).json({ 
                message : "The resource name is already taken"           
            })

        } else {
            const newResource = await Resources.create(req.body)
            res.status(201).json(newResource)
        }
        //const newResource = await Resources.create(req.body)
        //res.status(201).json(newResource)
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