const postsModel = require('../models/posts.model');

const createPost = async (req,res)=>{
   console.log(req.body);
    const post = new postsModel({
        ...req.body,
        owner: req.user._id
    });

    try{ 
        await post.save();
        res.status(200).send(post);
    }catch (e){
        res.json({"error": e});
    }
}

const getAllPosts = async (req,res)=>{
    try {
        const posts = await posts.find({})
        res.send(posts)
    } catch (e) {
        res.status(500).send()
    }
}


module.exports = {
    createPost,
    getAllPosts
}

