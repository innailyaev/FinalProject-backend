const postsModel = require('../models/posts.model');
const sharp = require('sharp');
const btoa = require('btoa');

const createPost = async (req,res)=>{
    const postDetails = { title, description} = req.body;
    console.log(postDetails);
    let bufferImgArr=[];
    let base64ImgArr=[];
    try{
    const post = new postsModel({
        ...req.body,
        owner: req.user._id,
    });

    bufferImgArr=await Promise.all(req.files.map(async(file)=>{
        return await sharp(file.buffer).resize({ width: 700, height: 700 }).png().toBuffer();
    }))
    // console.log(bufferImgArr);
    base64ImgArr = bufferImgArr.map((buffer)=>{
        return arrayBufferToBase64(buffer);
    })
    post.images=base64ImgArr;
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
    const allowedUpdates = ['description', 'images']
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

//Images upload
const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return btoa(binary);
}

const uploadBlogImages = async (req,res)=>{
    let bufferImgArr=[];
    let base64ImgArr=[];
    try {
        bufferImgArr=await Promise.all(req.files.map(async(file)=>{
            return await sharp(file.buffer).resize({ width: 500, height: 500 }).png().toBuffer();
        }))
        // console.log(bufferImgArr);
        base64ImgArr = bufferImgArr.map((buffer)=>{
            return arrayBufferToBase64(buffer);
        })
        // console.log(base64ImgArr);
        const post = await postsModel.findOne({"owner": req.user._id})
        console.log(post);
        post.images = base64ImgArr;
        // if (!post) {
        //     return res.status(404).send()
        // }

        await post.save();
        res.status(200).send(post);
    }catch (err) {
        res.status(404).send(err.message);
    }
}


module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    uploadBlogImages
}

