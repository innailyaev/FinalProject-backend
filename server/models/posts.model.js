const mongoose = require ('mongoose');


const PostsSchema = mongoose.Schema ({
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    image: {
        type: Buffer
    },
    images:{
        type: Array,
        required:false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
  
});

const Post = mongoose.model('Post', PostsSchema);
module.exports = Post;
