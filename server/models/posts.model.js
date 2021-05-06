const mongoose = require ('mongoose');


const PostsSchema = mongoose.Schema ({
    dedcription:{
        type:String,
        require:true,
        trim:true
    },

    images:{
        type: Array,
        required:false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'usersmodel'
    }
  
});

const postsmodel = mongoose.model('posts', PostsSchema);
module.exports = postsmodel;
