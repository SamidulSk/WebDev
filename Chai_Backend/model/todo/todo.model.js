import mongoose from "mongoose";
// youtube, job ,gym
const todoSchema=new mongoose.Schema( {

  title:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"  // model ka nam
  },
  subTodos:[
   {
     type:mongoose.Schema.Types.ObjectId,
     ref:"subTodo"
   }
  ]// array of sub todos
},{timestamps:true})

export const todo=mongoose.model("todo",todoSchema)