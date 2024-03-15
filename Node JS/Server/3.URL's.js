// handle different url's
// set up a server
const http=require('http');

const PORT=30;
const HOSTNAME='localhost'
const server=http.createServer( (req,res)=>{
  
    //Home page
    //About page
    //contact page
    //product page
    //rest ...-> error
    if(req.url=='/'){
        res.statusCode=200; 
        res.setHeader('Content-Type','text/plain'); 
        res.end("Welcome to  Node server created by sk");
    }
    else if(req.url=='/about'){
        res.statusCode=200; 
        res.setHeader('Content-Type','text/plain'); 
        res.end(" About page is here");
    }
    else if(req.url=='/contact'){
        res.statusCode=200; 
        res.setHeader('Content-Type','text/plain'); 
        res.end(" This is contact page 933854125");
    }
    else if(req.url=='/product'){
        const Options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        const apiReq = http.request(Options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode=200; 
                res.setHeader('Content-Type','application/json'); 
                res.end(data.toString());
            })
        })
        
        apiReq.on("error", () => {
            console.log(e);
        })
        apiReq.end();

        
    }
    else{
        res.statusCode=500; 
        res.setHeader('Content-Type','text/plain'); 
        res.end(" Server Error!");
    }

});
server.listen(PORT, ()=>{
    console.log(`server running at ${HOSTNAME}:${PORT}`);
})