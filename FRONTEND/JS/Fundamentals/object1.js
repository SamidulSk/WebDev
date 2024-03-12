 // create a employee object
 var emp={
    name:"John",
    age:30,
    salary:50000
 }
console.log(emp)
 //keys
let keys=Object.keys(emp)  // it return a array
console.log(keys)
//values
console.log(Object.values(emp))
//entries
console.log(Object.entries(emp))  // return array of array

// assign
const newObject=Object.assign({},emp)  // return copy of emp
console.log(newObject)

// freeze
//Object.freeze(emp);  // it freeze the object no manupulation apply on it
emp.name="peter"
console.log(emp)

// isfreeze or not
console.log(Object.isFrozen(emp)) // check 

// seal
emp.department='IT'   // we can't add new thing
Object.seal(emp)    // we can change the existing attribute
emp.id=100
emp.name='samidul'
console.log(emp)
console.log(Object.isSealed(emp))

//Object create
let user1={name:"samidul"}
console.log(user1)
let obj=Object.create(user1)
obj.age=21
console.log(obj.name)

// hasown
console.log(Object.hasOwn(emp,'department'))
console.log(Object.hasOwn(obj,'department'))

//getOwnPropertyNames
console.log(Object.getOwnPropertyNames(emp))

console.log(Object.getOwnPropertyDescriptor(emp,'name'))

//define property  
Object.defineProperty(emp,'name',{
    value:'HOSSAIN',
    writable:false
   
})
emp.name='ganga'  // because writable is false
console.log(emp.name) 

// define properties
Object.defineProperties(emp,{
    salary:{
        value:80000,
        writable:false
    },
    age:{
        value:25,
        writable:true
    },
    // phone:{
    //     value:9339145532,  
    //     enumerable:false  // no looping is allow
    // }
   
})
for(const key in emp){
    console.log(key+ ":"+ emp[key])  // gives a error because phone is not allow for loop
}
