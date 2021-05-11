const express = require('express');
const auth = require('../middelware/auth');
const multer = require('multer');
const sharp = require('sharp');
const router = express.Router();
const User = require('../models/users.model');
const userController = require('../controllers/users.controller');

//image upload
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

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
}).post('/profile/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
    req.user.avatar = buffer;
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
}).delete('/profile/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
}).get('/profile/:id/avatar', async (req, res) => {
    console.log(req.params.id);
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router;