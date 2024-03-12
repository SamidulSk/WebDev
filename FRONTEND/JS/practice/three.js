//"use strict";
const accountId=101;
let accontEmail='mrsamidul2002@gmail.com';
var accountPasswaord='12345';
accountCity="kolkata"; // allow but not a good practice
//accountId=32; changes in const is not allow


console.log(accountId);
console.table([accontEmail,accountPasswaord,accountCity])

// data type
 let name='samidul';
 let age=22;
 let islogin=false;

 let score=33;
 console.log(typeof(score))

 let scoreinStr=String(score)
 console.log(scoreinStr)
 //  "" -> empty string means false in boolean
 //  " any string"-> string means true in boolean

 console.log(2**2);

 let str1="hellow";
 let str2="sk";
 console.log(str1+str2);
let id=Symbol('4542');
let id2=Symbol('4235');
console.log(id===id2)  //false

const myfunction=function (){
    console.log("hello lal")
}();