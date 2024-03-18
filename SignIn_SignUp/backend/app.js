const express=require('express');
const app=express();
const authRouter=require('./router/authRoute');
const databaseconnect = require('./config/databaseConfig');
const cookieParser=require('cookie-parser');

databaseconnect();
app.use(express.json()); 
app.use(cookieParser());
app.use('/api/auth',authRouter)


app.use('/', (req,res)=>{  //route
    res.status(200).json({data: 'JWTauth server updated'})
});

module.exports=app;