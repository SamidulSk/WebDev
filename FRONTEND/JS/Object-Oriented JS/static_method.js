// static method can create object without new keyword
function Person(name){
    this.name=name
}
Person.createPerson=function(name){
    return new Person(name)
}

let rahul=Person.createPerson('rahul')
console.log(rahul.name)