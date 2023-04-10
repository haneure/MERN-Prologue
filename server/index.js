const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose").default
const express = require("express")

const app = express();
const User = require('./models/User')

mongoose.connect(process.env.MONGODB_URI).then(r => console.log("Connected to database")).catch(err => console.log(err));

app.get("/", async (req, res) => {
    await User.find()
        .then((result) => {
        res.status(200).json(result)
    })
        .catch(err => {
            res.status(400).json({error: err})
        })
});

app.listen(process.env.PORT, () => {
    console.log("Server Runs Successfully!");
})