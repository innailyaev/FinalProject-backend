const userModel = require('../models/users.model');
const sharp = require('sharp');
const btoa = require('btoa');


//AUTHENTICATIONS///

const singUp = async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(req.body);
   
    const user = new userModel({
        name,
        email,
        password   
    });

    try{ 
        await user.save();
        const token = await user.generateAuthToken(); // signUp - create token
        res.json({"success": user, token:token});
    }catch (e){
        res.json({"error": e});
    }
}

const login = async (req,res)=>{

    try{
        const user = await userModel.findByCredentials(req.body.email,req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).json({user,token});
    }catch(e){
        console.log(e);
        res.status(400).send("Unable to login");
    }
}

const getUserById = async (req,res)=>{
    const id= req.params.userId;
    if(!id){
        return res.status(200).json({error: 'Id is required'})
    }
    try{
        const user = await userModel.find({_id:id});
        console.log(user);
        if(user.length == 0){
            return res.status(404).send('User not found')
        }
        res.send(user);
    }catch (e){
        res.status(500).send(e);}
}

const logout = async (req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!==req.token;
        })

        await req.user.save();
        res.send("Logout")
    }catch(e){
        res.status(500).send("failed to logout");
    }
}

const logoutAll = async (req,res)=>{
    try{
        req.user.tokens = [];
        await req.user.save();
        res.send("Logout All")
    }catch(e){
        res.status(500).send();
    }
}



const getUserProfile = async (req,res)=>{
    try{
    const user =  await userModel.findOne({ _id: req.user._id })
    console.log("profile",user);
    res.send(user);  
    }catch(e){
        res.status(500).send(e);
    }
}

const deleteUserProfile = async (req,res)=>{
    try{
        await req.user.remove();
        res.send(req.user);
    }catch(e){
        res.status(500).send();
    }
}

const updateProfile = async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['Name','email','password'];
    const isValidOperation = updates.every((update)=>
    allowedUpdates.includes(update));

    if(!isValidOperation){
        return res.status(400).send("Invalid update");
    }

    try{
        updates.forEach((update)=>
            req.user[update]=req.body[update]);
        await req.user.save();
        res.send(req.user);
    }catch(e){
        res.status(400).send(e);
    }
}

//image upload
const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    console.log("bufferrrrrrr",buffer);
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return btoa(binary);
}

const uploadUserImage = async (req,res)=>{
    try {
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
        const imgSrc = arrayBufferToBase64(buffer);
        req.user.img = imgSrc;        
        await req.user.save();
        res.status(200).send(req.user);
    }catch (err) {
        res.status(404).send(err.message);
    }
}

const getProfileImage = async (req,res) =>{ 
    try {
        console.log("getprofile image", req.params.id);
        const user = await userModel.findById(req.params.id);
        console.log("user",user);
        if (!user || !user.avatar) {
            throw new Error();
        }
        res.set('Content-Type', 'image/png');
        res.send(user.avatar);
    }catch (e) {
        res.status(404).send(e.message);
    }
}



module.exports = {
    singUp,
    login,
    logout,
    logoutAll,
    getUserProfile,
    deleteUserProfile,
    updateProfile,
    uploadUserImage,
    getProfileImage,
    getUserById
}
