const mongoose = require("mongoose");
const {Schema,model} = mongoose;



const Person = new Schema ({
    name: {type:String, required:true},
    age: Number,
    favoriteFoods: [{body:String}]
})

const Post = model("Posts", Person);

model.exports = Post;
