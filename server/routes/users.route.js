const express = require('express');
const auth = require('../middelware/auth');
const router = express.Router();
const User = require('../models/users.model');
const userController = require('../controllers/users.controller');
const upload = require('../middelware/upload');



router.post('/signup',(req,res)=>{ //signUp - add users to DB
    userController.singUp(req,res);
}).delete('/profile',auth,(req,res)=>{
    userController.deleteUserProfile(req,res);
}).get('/profile',auth,async (req,res)=>{ //get user profile
    userController.getUserProfile(req,res);
}).post('/login',async(req,res)=>{ //login
    userController.login(req,res);
}).post('/logout',auth,(req,res)=>{ //logout = here we need auth to remove the token
    userController.logout(req,res);
}).post('/logoutAll',auth,(req,res)=>{ //logout all - from all devices
    userController.logoutAll(req,res);
}).put('/profile',auth,(req,res)=>{ // update user profile
    userController.updateProfile(req,res);
}).post('/profile/avatar', auth, upload.single('avatar'), (req, res) => {
    userController.uploadUserImage(req,res);
}).delete('/profile/avatar', auth, async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.send();
}).get('/profile/:id/avatar',  (req, res) => {
    userController.getProfileImage(req,res);   
}).get('/:userId', (req, res) => {
    userController.getUserById(req, res);
})

module.exports = router;