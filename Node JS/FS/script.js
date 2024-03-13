const fs = require('fs');
const { buffer } = require('stream/consumers');

// async way of file reading
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         console.error("Error:", err); 
        
//     } else {
//         console.log("Data:", data.toString() );
//         // Process data further here if needed
//     }
// });

// synchronus way
// let data=fs.readFileSync('input.txt');
// console.log(data.toString())
const buf=new Buffer(1024);
fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.error(err);
    }
    console.log("File open succesfully");
    fs.read(fd,buffer,0,buf.length,0,function(err,databytes){
        if(er){
            console.log(er);
        }
        console(databytes);
        console.log(buf.slice(0,databytes).toString());
    })
})

//write

fs.writeFile('input.txt','pw skils',function(err){
    if(err){
        console("error in writing");
    }
    else{
        console.log('succesfuly write');
    }
})

//append 
fs.appendFile('input.txt',' also hello from chai aur code','utf8',function(err){
    if(err){
        console.log("error in appending");
    }
    else{
        console.log("append!!!!!!")
    }
})

//close
fs.close(fd,function(err){
    if(err){
        console.log("Eror in closing file");
    }
    else{
        console.log("sucessfully closed")
    }
})

delete
fs.unlink('input.txt');