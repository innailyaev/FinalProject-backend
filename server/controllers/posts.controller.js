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

const getPosts = async (req,res)=>{
    try {
        await req.user.populate('posts').execPopulate()
        res.status(200).send(req.user.posts);
    } catch (e) {
        res.status(500).send()
    }
}

const getPostById = async (req,res)=>{
    const _id = req.params.id
    console.log(req.user._id);

    try {
        const post = await postsModel.findOne({ _id, owner: req.user._id })
        console.log(post);

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }

}


module.exports = {
    createPost,
    getPosts,
    getPostById
}

