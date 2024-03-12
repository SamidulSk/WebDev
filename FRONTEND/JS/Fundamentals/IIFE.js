// //iife

// // (function (){

// // })()

// // (()=>{
// //  console.log("This is self invoking function")
// // })()


// // uses
// //1- avoid pollution of global namespace
// const greet = 'global variable';
// const greeting = () => {
//     return 'hello global variable'
// }

// (() => {
//     const greet = 'IIFE variable';
//     const greeting = () => {
//         return 'hello IIFE function'
//     }
//     console.log(greet) // Outputs: 'IIFE variable'
//     console.log(greeting()) // Outputs: [Function: greeting]
// })()
// console.log(greet) // Outputs: 'global variable'
// console.log(greeting()) // Outputs: [Function: greeting]

// // Check if console.log is still a function in the global scope
// console.log(typeof console.log); // Should output 'function'



// data privacy

(()=>{
    let password='7459';
    const showPassword = () => {
        console.log('password-',password)
    }
    showPassword()
})()