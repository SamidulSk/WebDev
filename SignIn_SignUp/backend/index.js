require('dotenv').config();
const PORT=process.env.PORT || 5001;
const app=require('./app'); // server create on next file

app.listen( PORT, ()=>{
    console.log(`server is listening at at http://localhost:${PORT}`)
})