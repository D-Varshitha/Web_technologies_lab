// Loading environment variables
// Creating the Express application
// Enabling middleware
// Connecting to MongoDB
// Registering our routes
// Starting the server

import './loadEnvironment.mjs';
import express from  "express";
import cors from "cors";
import {connectToDatabase} from "./db/conn.mjs";

import postRouters from "./router/posts.mjs";

const app = express();
app.use(cors()); //middleware
app.use(express.json()); // middleware

app.use("/api/posts",postRouters);
const PORT = process.env.PORT||3000;
try{
    await connectToDatabase();
    app.listen(PORT,()=>{
        console.log("The application is running successfully on port",PORT);
    });
}catch(e){
    console.error("Failed to start the server");
    console.error(e.message);
}