const http=require('http');
const server=http.createServer(  (req,res) => {
    if(req.url =='/'){
        res.write('<h1> Hello,Node.js! </h1>');
    }
    else if(req.url=='/about'){
       res.write('<h1>about Page!!!!!</h1>');
    }
    res.end();
})
server.listen(5002);  // start on port number 5000
console.log("The http server is running of port 5000: ");