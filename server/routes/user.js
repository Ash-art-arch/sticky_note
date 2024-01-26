const express = require ("express");
const bcrypt = require("bcrypt");
const jwt =require ("jsonwebtoken")
const user = require ("../models/users");


const saltRounds = 10;
const userroute = express.Router();
const secretKey="ashdfhsagf"
userroute.get("/register",(req,res)=>{
    res.json({
        message:"hello"
    })
})
userroute.post("/register", async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(req.body);
    console.log({name});
    console.log({email});
    console.log({password});
    try{
        const userDoc = await user.create({name,email,password:bcrypt.hashSync(password,saltRounds)});
        res.status(200).json(userDoc);

    }
    catch(err){
        console.log(err);
        res.status(400).json({message:"User already exists"});
    }
})
userroute.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    const userDoc = await user.findOne({email});
    if (!userDoc) {
        return res.status(400).json({ message: "User not found" });
    }
    const isOk = bcrypt.compareSync(password,userDoc.password);
    if(isOk){
        jwt.sign({email:userDoc.email,id:userDoc._id},secretKey,{},(err,token)=>{
            if(err)throw err;
            res.cookie("token",token).json({
                id:userDoc._id,
                name:userDoc.name
            })
        })
    }
    else{
        res.status(400).json({message:"Invalid credentials"});
    }
})
userroute.get("/profile",(req,res)=>{
    const token = req.cookies.token;
    if(token){
        jwt.verify(token,secretKey,{},(err,userData)=>{
            if(err)throw err;
            res.json(userData);
        })
    }
    else{
        res.json(null);
    }
    
})
userroute.post("/logout",async (req,res)=>{
   
    res.clearCookie("token").json("ok");
   
})

module.exports=userroute