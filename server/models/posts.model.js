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
  
});

const postsmodel = mongoose.model ('posts', PostsSchema);
module.exports = postsmodel;