//Mongo Practice

//Create entry point
let express = require('express');
let app = express();

//port number
let port = 2112;

//import json middleware
app.use(express.json());

//practically cope and paste everytime unless different user or database
///////////////////////////////////////////////////////////
//Database setup
const mongoose = require('mongoose');
//connection string under variable
const mongoDB = 'mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority';
//Actually try and connect to the database
//sanity
console.log(`Connecting to Mongo at ${mongoDB}`)
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true });
//Pointer to database instance
let db = mongoose.connection;
//sanity
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
///////////////////////////////////////////////////////////

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