//IIFE:- immedeately Invoked Function Expressions   ( ()=>{} )()

// (function DBMS(){  // named IIFE
//     console.log("DB CONNECTED")
// })();


// (() => {   // IIFE without name
//   console.log(`DB CONNECTED TWO`)
// })();

((name)=>(
    console.log(`hello , ${name}`)
))('samidul')

function sayName(name){
  console.log(`Your name is ${name}`)
}
sayName("grm");