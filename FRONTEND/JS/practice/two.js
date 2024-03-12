// funtionn
function add(){
    let a=3;
    let b=9;
    console.log(a+b);
}
add();

function add(a,b){
    console.log(a+b);
}

// first class citizenship of function in js
let result=function add(a,b){
    console.log(a+b);
}
add(7,2)

console.log(result(3,7))



function x(callback){
    console.log('hello')
    callback()
}
function y(){
    console.log("bye")
}

x(y)

// return
function mul(a,b){
   return a*b
}
let multiplecation=mul(2,8);
console.log(multiplecation)