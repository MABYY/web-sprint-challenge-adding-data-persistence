const express = require("express")
const server = express()
const projectRoute = require('./project/router')
const resourceRoute = require('./resource/router')

server.use(express.json())
server.use('/api/projects',projectRoute)
server.use('/api/resources',resourceRoute)

server.get('/',(req,res) => {
    res.send(`<h1>Sprint Challenge</h1>`)
})

server.get('*',(req,res) =>{
    res.status(500).json({
        message: "Incorrect Path"
    })
})

module.exports = server     