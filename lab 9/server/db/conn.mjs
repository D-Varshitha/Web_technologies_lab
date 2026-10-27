import {MongoClient} from "mongodb";
const uri=process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db; // database object
export async function connectToDatabase(){
    if(db){
        return db;
    }
    await client.connect();// connects to the mongodb
    db = client.db("blogDB");// selects the database which we want to work on
    console.log("The database is connected successfully");
    return db;
}