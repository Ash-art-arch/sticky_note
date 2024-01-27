const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userroute = require("./routes/user");
const cookieParser = require("cookie-parser");

const PORT = 4000;

const app = express({
    cors:true
});

app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use("/",userroute);

app.listen(PORT,()=>{
    console.log("Server running on port : ",PORT);
})


mongoose.connect("mongodb://localhost:27017/sticky_notesDB").then(()=>{
    console.log("DB connected");
})