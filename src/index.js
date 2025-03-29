// require("dotenv").config({path:'./env'}); we dont want to use
// as this removes the consitency of the project and we want to use module type
import dotenv from "dotenv";


import express from "express";
import connectDB from "./db/connectdb.js";

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config({
    path: './env'
})//now to use this goto pakaage.json/scripts and use it as an exprerimental feature


connectDB()









// function connectDB() {

// }

// connectDB().then(() => {
//     console.log("Connected to DB");
// }
// ).catch((err) => {
//     console.log("Error connecting to DB", err.message);
// }
// ) or


/*
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(err)=>{
            console.log("Error connecting to DB", err.message);
            throw
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }
    catch(err){
        console.log("Error connecting to DB", err.message);
        process.exit(1);
    }
})()
*/