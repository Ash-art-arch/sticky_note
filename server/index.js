const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = 4000;

const app = express({
    cors:true
});

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log("Server running on port : ",PORT);
})
