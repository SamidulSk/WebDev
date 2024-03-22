import mongoose from "mongoose"

const productSchema=new mongoose.Schema( {
  description:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
 productImage:{
    type:String, // cloudinary url
    required:true,
  },
  price:{
    type:Number,
    default:0,
  },
  stock:{
    type:Number,
    default:0
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
}, {timestamps:true})

export const product= mongoose.model("product",productSchema)