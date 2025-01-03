const express = require("express");


const connectDb= require("./config/database");
const User = require("./models/user");
const app = express();

// app.use("/",(req, res)=>{
//     res.send("hi")

// })

app.post("/signup",async(req,res)=>{
    //Creating a new instance of the user model
   const user= new User({
        firstName:"Bijay",
        lastName:"agarwal",
        emailId:"juw",
        gender:"female",
        age:9
    })
    await user.save();
    res.send("success");
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
