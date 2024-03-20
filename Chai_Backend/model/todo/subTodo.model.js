import mongoose from "mongoose"
// youtube ka kam ka list, job ka kam ka list, gym ka kam ka list

const subTodoSchema=new mongoose.Schema( {
  content:{
    type:String,
    reqired:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timeseries:true})

export const subTodo=mongoose.model( "subTodo",subTodoSchema)

