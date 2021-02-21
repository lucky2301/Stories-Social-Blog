const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const indexRouter = require('./routes/index');
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;
const mongoose = require('mongoose');

// Middlewares
app.use(express.json())


// Connection to mongocloud Db
mongoose.connect(databaseUrl,{useUnifiedTopology:true, useNewUrlParser:true}, (err)=>{
    if (err) throw err;
    console.log("connected to db successfully")
})



// routes handler
app.use('/', indexRouter)


// listen to port
app.listen(port, (err)=>{
    if (err) throw error;
    console.log(`server started at ${port}`)
})