const express = require("express");
require("dotenv").config({path:"./.env"})

const connectDB = require("./config/connectDB");
const Post = require("./model/post")
connectDB();

const App = express();
const PORT = process.env.MONGO_URI || 6011

const newPost = new Post({
    name: "Elyes",
    age: 27,
    favoriteFoods: ["Spaghetti","Risotto"]
});
newPost.save().then(()=>console.log(newPost))

App.listen(PORT, (err)=>{
    err?
    console.log(err) 
    : console.log(`server is running on ${PORT}`)
})

