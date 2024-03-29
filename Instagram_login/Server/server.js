const express = require("express");
require("dotenv").config()
const connectDatabase = require("./config/db");
const { userRoute } = require("./routes/user.route");
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(cookieParser())

app.use(express.json())
app.use("/",userRoute)



app.listen(3000,async()=>{
  connectDatabase()
    console.log("Server Starting on PORT :",3000)
})