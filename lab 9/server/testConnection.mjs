import "./loadEnvironment.mjs";
import {connectToDatabase} from "./db/conn.mjs";

try{
    await connectToDatabase();
    console.log("database is okay");
}catch(e){
    console.error("database connection is failed");
    console.error(e.message);
}