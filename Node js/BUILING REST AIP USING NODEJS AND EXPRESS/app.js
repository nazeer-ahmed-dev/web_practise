const express = require('express')
const app = express()

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


app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})

//app.listen(3000,()=>{console.log("lisiting on port 3000")})

//enivoirment variable PORT
const port =  3101;
app.listen(port,()=>{console.log(`lisiting on port 3000 ${port}`)})