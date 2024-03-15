//02 write in a file
const fs=require('fs');
fs.writeFile('node_Architecture.txt','Node.js is a JavaScript runtime environment that executes JavaScript code outside of a browser. It is built on Chromes V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.', function(err){
    if(err){
        console.log("Error : failed to write");
    }
    else{
        console.log("succesfully write")
    }
})
//output: succesfully write

//03 read the content of a file
fs.readFile('node_Architecture.txt',function(err,data){
    if(err){
        console.error("Failed to read");
    }
    else{
        console.log(data.toString());  
    }
})
//output: Node.js is a JavaScript runtime environment that executes JavaScript code outside of a browser. It is built on Chromes V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient

//04 append to file node_Architecture
fs.appendFile('node_Architecture.txt','Node.js is a powerful and versatile platform that can be used to build a wide variety of applications. It is a good choice for developers who are looking for a high-performance, scalable, and easy-to-use platform.','utf8',function(err){
    if(err){
        console.log("failed to apped: ",err);
    }
    else{
        console.log("succesfully appeded");
    }
    let data=fs.readFileSync('node_Architecture.txt');
    console.log(data.toString());
})

//output: Node.js is a JavaScript runtime environment that executes JavaScript code outside of a browser. It is built on Chromes V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.Node.js is a powerful and versatile platform that can be used to build a wide variety of applications. It is a good choice for developers who are looking for a high-performance, scalable, and easy-to-use platform.Node.js is a powerful and versatile platform that can be used to build a wide variety of applications. It is a good choice for developers who are looking for a high-performance, scalable, and easy-to-use platform.

//05 delete node_Architecture.txt
fs.unlink('node_Architecture.txt',function(err){
    if(err){
        console.log("Failed to delete",err);
        
    }
    else{
        console.log("File Deleted SuccessFully");
    }
});

//06 print the os name and the os release version to the console
const os=require('os');
console.log(os.type())  //Windows_NT
console.log(os.release())  //10.0.22631

//07 create server for show message
const http=require('http');
const server=http.createServer( function(req,res){
    if(req.url=='/'){
        res.write('<h1> I am happy to learn full stack web devlopment from pw skills </h1>')
    }
    res.end();
})
server.listen(5005);

//08 event module to show suscribe message

const EventEmitter = require("events");

const eventEmitter3 = new EventEmitter();

const subscribeMessage3 = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter3.addListener("subscribe", subscribeMessage3);

eventEmitter3.emit("subscribe", "College Wallah");


//09 remove event than call
const EventEmitter = require("events");

const eventEmitter2 = new EventEmitter();

const subscribeMessage2 = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage2);

console.log("Calling event listner before removing the event.");
eventEmitte2r.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter2.removeListener("subscribe", subscribeMessage2);

eventEmitter2.emit("subscribe", "College Wallah");

//output: ReferenceError: eventEmitter is not defined

//10 maximum event linstener
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {// event handler
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

//output:The default maximum number of event listners are: 10
//The updated maximum number of event listners are: 5