require('dotenv').config();
const express=require('express');  // import express
const app=express(); // generate instance

const hostname='localhost';
const PORT=4010; // alocate port

app.get('/', (req,res)=>{
    res.send("hello world!!!!!");
})
app.get('/twitter', (req,res)=>{
    res.send("This is twitter of samidul!!!!");
})
app.get('/login', (req,res)=>{
    res.send('<h1> please login at chai aur code</h1>');
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at ${hostname} :${PORT}`)
})