// const express=require('express')
import express from "express";
const app=express();

app.get('/',(req,res)=>{
    res.send("server is ready");
});

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {"id": 1, "title": "Outstanding Scarecrow", "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"},
        {"id": 2, "title": "Talking Oceans", "content": "What did one ocean say to the other ocean? Nothing, they just waved!"},
        {"id": 3, "title": "Skeleton Fight", "content": "Why don't skeletons fight each other? They don't have the guts!"},
        {"id": 4, "title": "Ownership of Cheese", "content": "What do you call cheese that isn't yours? Nacho cheese!"},
        {"id": 5, "title": "Two-Tired Bicycle", "content": "Why couldn't the bicycle stand up by itself? It was two-tired!"}
      ]
      res.send(jokes);
      
})
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at ${port}`);
})