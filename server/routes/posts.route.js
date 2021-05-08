const express = require('express');
const auth = require('../middelware/auth');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

router.post('/posts',auth,(req,res)=>{
    postsController.createPost(req,res); 
}).get('/posts', auth, (req, res) => {
    postsController.getPosts(req,res);
}).get('/posts/:id', auth, async (req, res) => {
    postsController.getPostById(req,res);
})

module.exports = router;