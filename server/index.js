const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userroute = require("./routes/user");
const cookieParser = require("cookie-parser");

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", userroute);

app.listen(PORT, () => {
    console.log("Server running on port:", PORT);
});

mongoose.connect("mongodb://localhost:27017/sticky_notesDB")
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
