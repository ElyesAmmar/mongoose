const express = require("express");
require("dotenv").config({path:"./.env"})

const connectDB = require("./config/connectDB");
const Post = require("./model/post")
connectDB();

const App = express();
const PORT = process.env.PORT || 6011;

// const newPost = new Post({
//         name: "Elyes",
//         age: 27,
//         favoriteFoods: ["Spaghetti","Risotto"]
//     });
// newPost.save().then(()=>console.log(newPost))

// Post.create([
//             {name: "Elyes",
//             age: 27,
//             favoriteFoods: ["Spaghetti","Risotto"]
//             },
//             {name: "Ammar",
//             age: 20,
//             favoriteFoods: ["Pizza","Crepe"]
//             },
//             {name: "Amine",
//             age: 18,
//             favoriteFoods: ["Couscous","Lasagne"]
//             },
//     ]).then(result => {
//         console.log(result)
//     })
    
// const findPost = async()=>{
//     try{
//         const Data= await Post.find({})
//         console.log(Data)

//     }catch(error){
//         console.log(error)
//     }
// }
// findPost();

const findOnePost = async()=>{
    try{
        // const Data= await Post.findOne({'name':'Amine'})
        const DataID= await Post.findById('645939c6f596ba91e13df62f')
        // console.log(Data)
        console.log(DataID)
        
    }catch(error){
        console.log(error)
    }
}
findOnePost();

const update = async()=> {
    try{
        await Post.findOneAndUpdate({'name':'Amine'},{$set:{'name':'nesrine'}})
        console.log('post updated...')
    }catch(error){
        console.log(error)
    }
}
update();

// const deletePost = async()=> {
//     try{
//         const id = '645939c6f596ba91e13df62e'
//         await Post.findByIdAndRemove({ _id: id })
//         console.log('post updated...')
//     }catch(error){
//         console.log(error)
//     }
// }
// deletePost();

const findBurritoLovers = async () => {
    try {
      const data = await Person.find({ favoriteFoods: 'burrito' })
        .sort('name')
        .limit(2)
        .select('-age')
        .exec();
  
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  
  findBurritoLovers();

App.listen(PORT, (err)=>{
    err?
    console.log(err) 
    : console.log(`server is running on ${PORT}`)
})

