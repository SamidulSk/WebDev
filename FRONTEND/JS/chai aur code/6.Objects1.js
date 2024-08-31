// singleton using constructor
//object.create || new Object()

// object literals
const mySym=Symbol("KeyOne")
const jsUser={
    name:"hitesh",
    "full Name":"Hitesh Choudhury",
    [mySym]:"Unique Symbol",
     age:18,
     location:"Jaipur",
     email:"hitesh@goole.com",
     isLoggedIn:false,
     lastLoginDays:['monday','saturday']
}

// console.log(jsUser.email)
// console.log(jsUser["full Name"])
// console.log(jsUser.mySym)  //string
// console.log(jsUser[mySym]) // object
// console.log(typeof mySym)

// jsUser.location="Delhi"
// //Object.freeze(jsUser)
// jsUser.location="kolkata"
// console.log(jsUser)

// jsUser.mob=9339145533
// console.log(jsUser)

// jsUser.greeting=function(){
//     console.log("Hello js users")
// }

// console.log(jsUser.greeting())

// add another function
jsUser.greeting2=function(){
    console.log(`Hello js user, ${this.name}`)  //this-> js user
}
jsUser.greeting2();