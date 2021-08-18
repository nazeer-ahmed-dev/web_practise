// path
const path = require('path');
var pathObj = path.parse(__filename)
console.log(pathObj)

// os 
const os = require('os')
var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total memory :${totalMemory}`);
console.log(`Free memory : ${freeMemory}`)

//working with files
const fs = require('fs')
//const file = fs.readdirSync('./')
// const a = fs.readdirSync('./')
// console.log(a)

fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files)
})

//working with event

const EventEmitter = require('events')
const emitter = new EventEmitter()

// Register a listerner
emitter.on('messageLogged',(arg)=>{ // arg or e or eventArg
console.log('called',arg)
}) // first arg : name of argument and callbakc function
emitter.emit('messageLogged',{id:1,url:'http://'})//emit to raise an event
                // emit : making a noise , produce - signalling
                //] in event argument we can pass an objecdt {}
// Raise : looger.js (data : message )
 
const Logger = require('./logger')
 const logger = new Logger()
 logger.on('messageLogged',(arg)=>{
    console.log('acces',arg)
 })
 
 logger.log('message')


 // http module
 const http = require('http')

//  const server = http.createServer()
//  server.on('connection',(socket)=>{
// console.log('New connection')
//  })
//  server.listen(3000)
//  console.log('Listening on port 3000..')

 const server = http.createServer((req,res)=>{
     if(req.url=='/')
     {res.write("hello")
     res.end()}
     if(req.url=='/api/courses')
     {
         res.write(JSON.stringify([1,2,3]))
         res.end()
     }
 }
    )