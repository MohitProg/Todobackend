const mongoose=require("mongoose");

mongoose.connect(process.env.Mongo_URL).then(()=>{
    console.log("database is connected  ");
}).catch((error)=>{
    console.log(error);
})