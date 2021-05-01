const express = require('express');
const auth = require('../Middelware/auth');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.post('/signup',(req,res)=>{ //signUp - add users to DB
    userController.singUp(req,res);
}).delete('/profile',auth,(req,res)=>{
    userController.deleteUserProfile(req,res);
}).get('/profile',auth,(req,res)=>{ //get user profile
    res.send(req.user);
}).post('/login',async(req,res)=>{ //login
    userController.login(req,res);
}).post('/logout',auth,(req,res)=>{ //logout = here we need auth to remove the token
    userController.logout(req,res);
}).post('/logoutAll',auth,(req,res)=>{ //logout all - from all devices
    userController.logoutAll(req,res);
}).put('/profile',auth,(req,res)=>{ // update user profile
    userController.updateProfile(req,res);
})

module.exports = router;