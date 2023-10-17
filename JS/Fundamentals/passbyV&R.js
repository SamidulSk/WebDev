//pass by value in primitive data types
let name ='sk'
let temp=name;
temp='hossain';
console.log(name)
console.log(temp)

console.log('*********')
// pass by reference in non-primitive data types
let obj1={namee:'sk'}
let obj2=obj1;
obj2.namee='hossain'
console.log(obj1.namee);
console.log(obj2.namee)