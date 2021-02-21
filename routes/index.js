const Router = require('express').Router();

Router.get('/test',(req, res)=>{
    res.send("test successful, server running")
})


module.exports = Router