const express = require("express");
const app = express();

app.use("/",(req, res)=>{
    res.send("hi")

})

app.use("/test",(req, res)=>{res.send("babu")
})
app.listen(3000,()=>{
    console.log("listening to 3000")
});