const mongoose = require('mongoose')

const stickySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        minLength: 8,
        required: true,
    },
    password:
    {
        type: String,
        min: 8,
        max:20,
        required: true,
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: ()=>Date.now(),
    },
    tasks:[]
})

module.exports = mongoose.model("users",stickySchema)
