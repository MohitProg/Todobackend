const dotenv=require("dotenv").config()
const express=require("express");
const app=express();
const Userroute=require("./routes/user")
const Notesroute=require("./routes/Notes")
const cors=require("cors")
const path=require("path")
// data base connection 
require("./db/db")

// middleware
app.use(express.json());
app.use(cors())


// routes
app.use("/user/api/",Userroute)
app.use("/notes/api/",Notesroute)







// isten the app;

app.listen(process.env.PORT||80,()=>{
    console.log(`server is started at ${process.env.PORT}`)
})
