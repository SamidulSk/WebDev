// greeting with name using promise
function greet(name){
    return new Promise((resolve)=>{
        const greeting="Hello ,"+name;
        resolve(greeting);
    })
}
greet("samidul").then((message)=>console.log(message))