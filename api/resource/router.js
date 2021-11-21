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

router.use ('/', (error,req,res,next) => {
    res.status(error.status || 500).json({
        server_message:"Something went wrong - projects",
        message: error.message
    })
})

module.exports = router;