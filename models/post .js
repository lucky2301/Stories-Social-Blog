var mongoose = require('mongoose');


var PostSchema = mongoose.Schema({
    author:{
        type: String,
        default:'Anonymous'
    },
    post_body:{
        type: String,
        required: true
    },
    posted_time:{
        type:Date,
        default:Date.now()
    },
    post_likes:{
        type: Number
    },
    post_dislikes:{
        type: Number
    },
    post_comments:{
        type: Number
    },
    post_shares:{
        type: Number
    },
    is_active:{
        type: Boolean,
        default: true
    }
}) 

module.exports = mongoose.model('Post', PostSchema)