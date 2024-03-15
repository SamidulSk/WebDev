const express=require('express');  // import express
const app=express(); // generate instance

const hostname='localhost';
const PORT=4010; // alocate port

app.get('/', (req,res)=>{
    res.send("hello world!!!!!");
})
app.get('/about', (req,res)=>{
    res.send("This is about page!!!!!");
})
app.get('/contact', (req,res)=>{
    res.send(" contact me: phone no:9339145532!!!!!");
})

app.listen(PORT, ()=>{
    console.log(`Server running at ${hostname} :${PORT}`)
})