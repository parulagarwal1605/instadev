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
   
    //Creating a new instance of the user model
   const user= new User(req.body)
    try{
        await user.save();
        res.send("success");
    }catch(error){
        res.status(400).send("d",error)
      
    }
   
})
app.get("/user",async(req, res)=>{
    const userEmail= req.body.emailId;
    console.log("j",userEmail)
    try{
       
      const users = await User.findOne({emailId:userEmail}) 
       res.send(users);
    }catch(err){
     res.status(400).send("ger",err)
    }
})

app.get("/feed",async(req,res)=>{

 try{
    const user = await User.find({});
    res.send(user)

 }catch(err){
    res.status(400).send("something went wronh")
 }

})

//delete api findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).


app.delete('/user',async(req, res)=>{
    const deluser = req.body.id
    try{
        console.log("id", deluser)
        const del =await User.findByIdAndDelete(deluser);
        res.send("deleted")
    }
    catch(err){
res.status(400).send(err)
    }
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
