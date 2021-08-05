require('dotenv').config() // allows to inject fake Environment var

const  { PORT } = require('./config')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) //teaches express to pars req.body
server.use(cors())
server.use(helmet())

server.get('/', (req,res) => {
    res.send(`
    <h1>Web 44 is awesome </h1>
    `)
})


server.use('*', (req,res) => {
    res.json({
        message: 'Working'
    })
})

server.listen(PORT, () => { // heroku machine uses a different port
    console.log(`listening on ${PORT}`)
})