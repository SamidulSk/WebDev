import mongoose from "mongoose"

const medicalRecordSchema=new mongoose.Schema( {
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Patient"
  },
  Medications:[  //List of medications prescribed, dosage, and how often
    {
      type:String 
    }
  ],
  MedicalHistory:[
    {
      type:String
    }
  ],
  LabResults:{
    type:String,
    required:true
  }
},{timestamps:true})

export const MedicalRecord=mongoose.model("MedicalRecord",medicalRecordSchema)