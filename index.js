//Mongo Practice

//Create entry point
let express = require('express');
let app = express();

//port number
let port = 2112;

//import json middleware
app.use(express.json());

//listen on port
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

//import route
let api = require('./routes/api.js')

//mount route
app.use('/api',api);


//sanity
app.get('/test',(req,res)=>{
    res.send('Loud and Clear')
})