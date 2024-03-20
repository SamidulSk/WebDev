import mongoose from "mongoose"

const patientSchema=new mongoose.Schema( {
  name:{
    type:String,
    required:true
  },
  diagonseWith:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  age:{
    type:Number
  },
  bloodGroup:{
    type:String,
    requied:true
  },
  genger:{
    typeof:String,
    enum:["M","F","O"],
    reuired:true
  },
  phNo:{
    tyepe:Number,
    requied:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
},{timestamps:true})

export const patient=mongoose.model("Patient",patientSchema)