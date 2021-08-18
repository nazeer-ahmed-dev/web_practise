const express = require('express')
const app = express()

const Joi = require('joi') // input validation

app.use(express.json()) // for enabling req.body

const courses= [{id:1,name:"Nazeer"},
{id:2,name:"Ahmed"}]
// //Methods
// app.get()
// app.post()
// app.put()
// app.delete()

//http get request 
app.get('/',(req,res)=>{
    res.send('Hello world')
}) // first paramater root directories and seconde callback function for 
    // req through which we can easily indentify incoming request4
    // call back function also called route handler


app.get('/api/courses/:id',(req,res)=>{
    //res.send([1,2,3]);
    const course = courses.find(c=>c.id===parseInt(req.params.id))
    if(!courses) // 404
    res.status(404).send("the given id is not found")
    res.send(course)
})
//getting one course by get
//app.get('/api/courses/:id',(req,res)=>{res.send(req.params.id)}) //for two parameter /api/posts/:year/:month

//app.listen(3000,()=>{console.log("lisiting on port 3000")})

//post
app.post('api/courses',(req,res)=>{
    //input validation 
    // if(!req.body.name || req.body.name.length.<3)
    // {
    //     res.status(400).send('Name is required and minim 3 char ')
    //     return;
    // }

    const schema = { name : Joi.string().min(3).required()}
    const result = Joi.validate(req.body,schema)
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message)
    }
    const course = 
    {
        id:courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

//put upadate
app.put('/api/courses/:id',(res,req)=>{
    //look up the course
    const course = courses.find(c=>c.id===parseInt(req.params.id))
    if(!courses) // 404
    res.status(404).send("the given id is not found")
    res.send(course)
    //if not existing 404

    //validate
    const schema = { name : Joi.string().min(3).required()}
    const result = Joi.validate(req.body,schema)
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message)
    }
    //if invalide , retur 400 bad requst
    
    // upate
    course.name = req.body.name
    res.send(course)
    //retur the update coruse  
})
//enivoirment variable PORT
const port = process.env.PORT || 3000; // env value we can set by cmd by command (export PORT=5000)
app.listen(port,()=>{console.log(`lisiting on port 3000 ${port}`)})


