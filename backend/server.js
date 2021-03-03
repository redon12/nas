import data from './data';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/UserRoutes';
import bodyParser from 'body-parser';

// import dotenv from 'dotenv'
import cors from 'cors'
// require("dotenv").config()
require("dotenv").config()
// require("dotenv").config()
let server = express();
// "mongodb://localhost:27017/nas"
// "mongodb+srv://virae:C@list5r@nhublogger.xme4w.mongodb.net/nas"
const MONGO_URL = "mongodb+srv://virae:C@list5r@nhublogger.xme4w.mongodb.net/nas";//const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL)
try {
   const database = mongoose.connect(MONGO_URL, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    })
    if (database){
        console.log("database connected successfully");    }
}catch(error){
    console.log(error.reason)
}

server.use(bodyParser.json())
server.use("/users", router)
// server.use(cors())
server.use(express.static(__dirname+"/public"))
server.post("/api/products", (req, res)=> {
    res.send("wonderfully made")
    res.send(data.products);
});
server.get("/api/products/:id", (req, res)=> {
    // res.send("wonderfully made")
    // console.log(req.params.id);
    const productId = req.params.id;
    var product = data.products.find(x=>x._id === productId)
    if (product){
    res.send(product);
    // res.send("wonderfully made")

    console.log(product)
    }
    else {
        res.status(404).send({msg:"product Not found"})
        console.log("part of the else")
    }
});
const dirss = __dirname+"/build"

server.get("/", (req,res)=>{
    res.sendFile(dirss+"/index.html")
})

server.get("/*", (req,res)=>{
    res.sendFile(dirss+"/index.html")
})


if (process.env.NODE_ENV == "production"){
    server.use(express.static(dirss))

    
}

server.listen(process.env.PORT||"5001", ()=>{
    console.log("server connected successfully");
})