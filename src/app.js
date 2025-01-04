const express = require("express");


const connectDb= require("./config/database");
const User = require("./models/user");
const app = express();

// app.use("/",(req, res)=>{
//     res.send("hi")

// })
//if we send body from postman and try to console it it will not support for reading json and converting it into js object we need middleware 
//express provide espress.json as middleware
app.use(express.json());

app.post("/signup",async(req,res)=>{
    console.log("hi",req.body);
    //Creating a new instance of the user model
//    const user= new User({
//         firstName:"ijay",
//         lastName:"agarwal",
//         emailId:"juw",
//         gender:"female",
//         age:9
//     })
//     try{
//         await user.save();
//         res.send("success");
//     }catch(error){
//         res.status(400).send("d",error)
      
//     }
   
})
connectDb().then(()=>{
    console.log("connection done");

app.listen(7777,()=>{
    console.log("listening to 7000")
});
})
.catch((err)=>{
    console.error("db cannot be connected")
})
