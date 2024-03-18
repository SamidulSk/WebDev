// generate routes
const express=require('express');
const { signup , signin, getUser} = require('../controller/authController');
const authRouter=express.Router();

authRouter.post('/signup',signup) // signup handler run when this route signup url excess
authRouter.post('/signin',signin) // signin handler run when this route signin url excess
authRouter.get('/user',getUser)


module.exports=authRouter;