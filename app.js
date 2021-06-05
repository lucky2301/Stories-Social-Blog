var express = require('express');
var mongoose = require('mongoose');
var PostRouter = require('./controller/postroutes')
require('dotenv').config();         // important
// server creation
const app = express();

// settings
app.use(express.json());
app.use(express.urlencoded({extended:true}))



// port number
const PORT = process.env.PORT || 3002;





// Routing
app.use('/post',PostRouter);




// Connecting to DATABASE
mongoose.connect(process.env.DATABASE_URL,(err,data)=>{
    if (err) throw err
    console.log("connected successfully to database")
})


app.listen(PORT, (err, res)=>{
    console.log("Iam done")
})



