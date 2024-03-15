// set up a server
const http=require('http');

const PORT=3020;
const HOSTNAME='localhost'
const server=http.createServer( (req,res)=>{
    res.statusCode=200; // succesful    500-> error
    res.setHeader('Content-Type','text/plain'); // simple string  ->application/json
    res.end(" Node server created by sk");
});
server.listen(PORT, ()=>{
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})