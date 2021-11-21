const express = require("express")
const server = express()
// const RecipieRoute = require('./recipie-router')

server.use(express.json())
// server.use('/api/recipie',RecipieRoute)

server.get('/',(req,res) => {
    res.send(`<h1>Sprint Challenge</h1>`)
})

server.get('*',(req,res) =>{
    res.status(500).json({
        message: "Incorrect Path"
    })
})

module.exports = server     