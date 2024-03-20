import mongoose from "mongoose";

const userSchema=new mongoose.Schema( 
  {
    // username:String,
    // email:String,
    // isActive:Boolean
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },

    email:{
        type:String,
        requied:true,
        unique:true,
        lowercase:true
    },
    password:{
       type:String,
       required:[true,"password must be required"]
     }
   
  },{timestamps:true}
  ); // for one person

export const User=mongoose.model( "User",userSchema);  // model is a collection