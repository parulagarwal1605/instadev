const mongoose = require("mongoose");
const connectDb= async()=>{
    
    await mongoose.connect("mongodb+srv://parulAgarwal:Logical%401@namastenode.lb9ii.mongodb.net")
}

module.exports= connectDb;