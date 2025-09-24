// // Array
// // const arr=[1,2,3,4,5,6,7,8,9,10];
// // let s=arr.join("");
// // console.log(s);
// // console.log(typeof s);
// // console.log(arr)
// // console.log(typeof arr);

// // object
// let emp = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     salary: 50000
// };
// console.log(Object.keys(emp));
// console.log(Object.values(emp));
// console.log(Object.entries(emp));
// Object.defineProperty(emp, 'age', { writable: false, configurable: false, enumerable: true });
// console.log(emp['age']);
// emp['age'] = 35;
// console.log(emp['age']);
// delete emp['age'];
// console.log(emp['age']);
// const{salary,...rest}=emp; //destructuring
// console.log(salary);
// console.log(rest);

// String
let str="Hello World";
console.log(str.split(""));
console.log(str.split(" ").reverse().join(" "));
console.log(str.split("").reverse().join(""));

// create  a funtion which takes input and create an object
function createObject(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
let emp1 = new createObject("John", 30, "New York");
let emp2 = new createObject("Jane", 25, "Los Angeles");
console.log(emp1);
console.log(emp2);

//foreach
let arr=[1,2,3,4,5];
arr.forEach((element,index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

//map
let squaredArr=arr.map((element)=>{
    return element*element;
});
console.log(squaredArr); 

//filter
let evenArr=arr.filter((element)=>{
    return element%2===0;
});
//reduce
let sum=arr.reduce((acc,element)=>{
    return acc+element;
},0);
console.log(sum);