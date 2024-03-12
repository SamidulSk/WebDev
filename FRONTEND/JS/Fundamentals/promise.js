//create
function cretePromise() {
    return new Promise(function exec(resolve, reject) {
        //your code goes here
        setTimeout(function f() {
            console.log("timer done");
            resolve("done")
        },3000);
    });
}

console.log("Start")
let x=cretePromise();
console.log("got a new promise");
x.then(function f(value){  //registration
    console.log("promise done"+value)
}).catch(function g(value){
    console.log("handled"+value)
}).finally(function fn(){
    console.log("finally")
})
console.log("End")

for(let i=0;i<10000000000;i++){
    //some code
}