// let arr=[10,20,30,40,50]

// const [a,,c,,e]=arr
// console.log(a)
// console.log(c)
// console.log(e)


//string

// let [firstName,surName]='raj kapoor'.split(" ")
// console.log(firstName)

// let [a,b,c]='hello'
// console.log(a)
// console.log(c)

//set
// let setData= new Set([1,1,2,2,3,3])   // only unique
// console.log(setData)
// let [a,b,c]=setData
// console.log(a)
// console.log(b)
// console.log(c)

//object
let user={};

[user.name,user.surname]="sk samidul".split(" ")
console.log(user.name)
console.log(user.surname)

const user2={
    userName:'john',
    email:'john@gmail.com'
}
let {userName,email}=user2;
console.log(userName)
console.log(email)


let employee={
    empId:108,
     empName:'samidul'
}
let {empId :ID,empName:Name_of_the_Employee,age="NONE"}=employee;
console.log(Name_of_the_Employee);
console.log(ID);
console.log(age);

console.log("**************")

const user1={
    name:"Ramu",
    age1:25,
    city:'Delhi',
    occupation:'Engineer',
    hobbies:['coding','music','travel']
}
const {name,age1,occupation}=user1
console.log(name)
console.log(age1)
console.log(occupation)

//swap
// let firstName="john";
// let surName="peter";

// [surName,firstName]=[firstName,surName]
// console.log(firstName)

//smart function parameters
// const user3={
//     name:"Ramu",
//     age1:25,
//     city:'Delhi',
//     occupation:'Engineer',
//     hobbies:['coding','music','travel']
// }

// function specialFunc({occupation,name,city}){
//     console.log(name)
//     console.log(occupation)
//     console.log(city)
// }

// specialFunc(user3)