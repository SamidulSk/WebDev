//Database connection practice
//try catch mandatory
// method 1 -> write IIFE on index.js
import express from 'express'
import mongoose from 'mongoose';
const app= express();
( async()=>{
    try {
        await mongoose.connect(`${process.env.MONDOBD_URI}/${DB_NAME}`)
       app.on("Error ", (error)=>{console.log("Error",error)})
        app.listen(process.env.PORT, ()=>{
            console.log(`DB is connected at ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Failed to conect with DB",error)
        throw error
    }
})()

// method 2 -> write method on db folder and call it to index.js

const connectDB= async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.PORT}/${DB_NAME}`)
        console.log(`MongoDB conected at host ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Failed to connect with DB",error)
        throw error;
    }
}
export default connectDB

// on index.js
connectDB()
.then (  ()=>{
  app.listen(process.env.PORT || 3000 ,()=>{
    console.log("You are ready ! Database connected !"+ process.env.PORT)
  })
} )
.catch( (error)=>{
    console.log("MONGO DB conection FAILED!! ",error)
} )