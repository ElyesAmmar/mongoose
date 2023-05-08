const mongoose = require("mongoose");
const {Schema,model} = mongoose;



const Person = new Schema ({
    name: {type:String, required:true},
    age: Number,
    favoriteFoods: []
})

const Post = model("Posts", Person);

module.exports = Post;
