const jwt = require('jsonwebtoken');
const usersModel = require('../models/users.model');

const auth = async (req,res,next) =>{
    try{
        console.log("hello");
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token,'thisismysecretkey');
        const user = await usersModel.findOne({_id:decoded._id,'tokens.token':token});
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh",token);
        if(!user){
            throw new Error('wrong token');
        }
        req.token=token;
        req.user=user;
        next();
    }catch(e){
        console.log("error",e);
        res.status(401).send({error:'Please authenticate'});
    }
}

module.exports=auth;