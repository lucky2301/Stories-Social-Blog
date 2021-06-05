var express = require('express');
var Router = express.Router();
var Post = require('../models/Post ')



// saving a post in database
Router.post('/new', (req,res)=>{
    let post_body = req.body.post_body
    let post = new Post({
        post_body
    })
    try{
        post.save();
        res.send({message:"posted successfully"})

    }catch(err){
        res.send({message:"Something went wrong try again later"})
    }
    
    
})

module.exports = Router