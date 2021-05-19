const express = require('express');
const auth = require('../middelware/auth');
const router = express.Router();
const postsController = require('../controllers/posts.controller');
const upload = require('../middelware/upload');

router.post('/posts',auth,upload.array('images',12),(req,res)=>{
    postsController.createPost(req,res); 
}).get('/posts', auth, (req, res) => {
    postsController.getPosts(req,res);
}).get('/posts/allposts',(req,res)=>{
    postsController.getAllUsersPosts(req,res);
}).get('/posts/:id', auth, async (req, res) => {
    postsController.getPostById(req,res);
}).put('/posts/:id', auth, async (req, res) => {
    postsController.updatePost(req,res);
}).delete('/posts/:id', auth, async (req, res) => {
    postsController.deletePost(req,res);
}).post('/posts/photos/upload', auth, upload.array('images',12), (req, res) => {
    postsController.uploadBlogImages(req,res);
})
module.exports = router;