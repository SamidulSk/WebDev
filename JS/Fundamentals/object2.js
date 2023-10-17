// cretion of object


//1 using object literal
let emp={
    name:"John",
    age:30,
    salary:50000
 }
console.log(emp)

//2 using object constructor
let emp2= new Object()
emp2.id=290;
emp2.name='hari';
emp2.salary=42359;
console.log(emp2)

//3 using function and custom constructor
function Employee(id,name,salary){
   this.id=id;
   this.name=name;
   this.salary=salary;
}
let employee=new Employee(46,'sanu',4234)
console.log(employee)



//access
let stu={id:40,name:"Arko",salary:23542};
//dot notation  and square bracket notation
console.log(stu.id)
console.log(stu['salary'])
// add
stu.city='kolkata'
stu.country='india'
console.log(stu)
//change
stu.city='mumbai'
console.log(stu)

//delete
delete stu.city
delete stu['salary']
console.log(stu)

//iterate
for (let key in stu){
    console.log(key)
}