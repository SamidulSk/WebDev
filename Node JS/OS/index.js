const os=require('os');

console.log("cpu architecture: ",os.arch());
console.log("Free memory: ",os.freemem());
console.log("Total memory: ",os.totalmem());
//console.log("Network Interfaces: ",JSON.stringify(os.networkInterfaces()));

console.log("Os defalut temp dir:" ,os.tmpdir())

console.log(os.hostname()) //LAPTOP-6Q10UDQD
console.log(os.endianness()) // LE
console.log("os type: ",os.type()) // Windows_NT
console.log(os.platform()) // win32
console.log(os.release()) // 10.0.22631 release date