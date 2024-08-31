// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username} , welcome to website`) // this refers current context
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)  //***this return current context which is empty object{} -> because we are in node environment

// Arrow functioon

const chai =() => {
  let username="samidul"
  console.log(this);
}
chai()
// ()=>{}- explicit reuturn
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,5))

// ()=>() implicit return 
// const addtwo=(num1,num2)=> (num1+num2)
    
// console.log(addtwo(3,5))

