// render ejs file as response -> this is crazy❤️❤️❤️

const express=require('express');
const app=express();
app.set("view engine","ejs")
app.get('/palestine',function(req,res){
    res.render("palestine");
})
app.get('/contact',function(req,res){
    res.render("contact");
})
app.get('/profile',function(req,res){
    res.render("profile");
})
app.listen(3000);