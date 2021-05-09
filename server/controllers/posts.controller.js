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

    try {
        const post = await postsModel.findOne({ _id, "owner": req.user._id })

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
}

const updatePost = async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['dedcription', 'images']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const post = await postsModel.findOne({ _id: req.params.id, "owner": req.user._id})

        if (!post) {
            return res.status(404).send()
        }

        updates.forEach((update) => post[update] = req.body[update])
        await post.save()
        res.send(post)
    } catch (e) {
        res.status(400).send(e)
    }
}

const deletePost = async (req,res)=>{
    try {
        const post = await postsModel.findOneAndDelete({ _id: req.params.id, "owner": req.user._id })

        if (!post) {
            res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send(e)
    }
}


module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
}

