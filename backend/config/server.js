const port = 3003

const bodyParser = require('body-parser')
const express= require('express')
const server = express()
const allowCors= require('./cors')

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports=server

/*server.use(function(req,res,next){                           
------------ CONCEITO DE MIDLEWARE DO EXPRESS next() ---------
    console.log('midleware 1')
    next()
})

server.use(function(req,res,next){
    res.send('Funcionou o outro midlew')
    console.log('midlewware 2')
})*/