import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

 
const app = express();
const PORT = process.env.PORT || 8080;

const connectDB= async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MngoDB Connected!!, DB Hoast:${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log("Error connecting to DB", err.message);
        process.exit(1);
    }
}


export default connectDB;