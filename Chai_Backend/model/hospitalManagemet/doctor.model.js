import mongoose from "mongoose"

const doctorSchema=new mongoose.Schema( {
  name:{
    type:Stirng,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  Qualification:{
    type:Stirng,
  },
  experienceInYear:{
    type:Number,
    default:0
  },
  workInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hosptal"
    }
  ]
     
  
},{timestamps:true})

export const Doctor=mongoose.model("Doctor",doctorSchema)