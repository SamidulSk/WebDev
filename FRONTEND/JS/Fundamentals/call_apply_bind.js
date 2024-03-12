const user1={
    name:"john",
    greetings:function(city,age){ 
        console.log("hello "+this.name +" from " + city +" age = "+age)
    }
}
const user2={
    name:"peter",
}
//call -> function borrowing
user1.greetings.call(user2,"Delhi",43)

//apply
user1.greetings.apply(user2,['kolkata',30])
//bind-> crete a new fuction with fixed this
const person={
    name:"john",
    sayHi:function(city,age){
        console.log("hello "+name+"f rom "+city+" age = "+age)
    }
}
const anotherPerson={
    name:"peter"
}
 const boundFunction=person.sayHi.bind(anotherPerson,'mumbai',32)
boundFunction();