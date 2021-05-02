const userModel = require('../models/users.model');


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
        return res.status(400).send("Invalid update")
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

module.exports = {
    singUp,
    login,
    logout,
    logoutAll,
    deleteUserProfile,
    updateProfile
}
