const express = require ("express");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const userroute = express.Router();

userroute.post("/register ",(req,res)=>{
    const {name,email,password} = req.body;
})