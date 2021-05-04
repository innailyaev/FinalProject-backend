const express = require('express');
const auth = require('../middelware/auth');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

router.post('/posts',auth,(req,res)=>{
    postsController.createPost(req,res); 
}).get('/posts', async (req, res) => {
    postsController.getAllPosts(req,res);
})

module.exports = router;