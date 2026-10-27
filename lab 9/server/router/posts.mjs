import {Router} from "express";
import {ObjectId} from "mongodb";

import {connectToDatabase} from "../db/conn.mjs";
const router = Router();

router.get("/", async(req,res)=>{
    try{
    const db = await connectToDatabase();
    const posts = await db.collection("posts")
    .find().sort({createdAt:-1}).toArray();
    // -1 means descending order, 1 means ascending order
    res.status(200).json(posts); // send is executed immediately
    }catch(e){
        console.error(e);
        res.status(500).json({message:"Failed to fetch posts"});
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const db = await connectToDatabase();
        const {id}= req.params;
        if(!ObjectId.isValid(id)){
            return res.status(400).json({
                message:"Invalid post ID"
            });
        }
        const post = await db.collection("posts")
        .findOne({_id:new ObjectId(id)});
        if(!post){
            return res.status(404).json({message:"Post not found"});
        }
        res.status(200).json(post);

    }catch(e){
        console.error(e);
        res.status(500).json({message:"Failed to fetch post"});
    }
});

router.post('/',async(req,res)=>{
    try{
        const db = await connectToDatabase();
        const {title,author,content}=req.body;
        if(!title||!content||!author){
            return res.status(400).json({
                message:"Title, Author and Content are required"
            });
        }
        const newPost = {
            title,
            content,
            author,
            createdAt:new Date(),
            updatedAt:new Date()
        };
        const result = await db
        .collection("posts")
        .insertOne(newPost);

        res.status(201).json({
            message:"The post is created successfully",
            post:{
                _id:result.insertedId,
                ...newPost
            }
        });
    }catch(e){
        console.error(e);
        res.status(500).json({
            message:"Failed to create the post"
        });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const db = await connectToDatabase();
        const {id}= req.params;
        const {title,author,content}= req.body;

        if(!ObjectId.isValid(id)){
            return res.status(400).json({
                message:"Invalid post ID"
            });
        }
        if(!title||!author||!content){
            return res.status(400).json({
                message:"Title, Author and Content are required"
            })
        }
        const result = await db
        .collection("posts")
        .updateOne({_id:new ObjectId(id)},
        {$set:{
            title,
            content,
            author,
            updatedAt:new Date()
        }}
    );
    if(result.matchedCount===0){
        return res.status(404).json({
            message:"Post not found"
        });
    }
    res.status(200).json({
        message:"Post updated successfully"
    });
    }catch(e){
        console.error(e);
        res.status(500).json({
            message:"Failed to update the post"
        });
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const db = await connectToDatabase();
        const {id}=req.params;
        if(!ObjectId.isValid(id)){
            return res.status(400).json({
                message:"Invalid post ID"
            });
        }

        const result = await db.collection("posts")
        .deleteOne({_id:new ObjectId(id)});

        if(result.deletedCount===0){
             return res.status(404).json({
                message:"Post not found"
            });
        }
        res.status(200).json({
            message:"post deleted successfully"
        });

    }catch(e){
         console.error(e);
        res.status(500).json({
            message:"Failed to Delete the post"
        });
    }
});


export default router;