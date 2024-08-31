  // const tinderUser={}  // not a singleton object
const tinderUser = new Object()  //this is a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

// const regularUser = {
//     email: "someone@gmail.com",
//     fullname: {
//         userfullname: {
//             fisstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
//console.log(regularUser.fullname)

// merge two objects -> process 1
const finalObject = Object.assign({}, tinderUser, regularUser)
//console.log(finalObject)
// process 2 -> spread
const resultObject = { ...tinderUser, ...regularUser }
//console.log(resultObject)

// array of object
const arrOfObj = [
    {
        id: 23432,
        email: "mrsamidul2002@gmail.com"
    },
    {
        name: "samidul",
        age: 34
    },
    {
        phone: 9339134323
    }
]

//console.log(arrOfObj[1]) //  { name: 'samidul', age: 34 }

//console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ] remember this is a array***
console.log(Object.values(regularUser))

console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true