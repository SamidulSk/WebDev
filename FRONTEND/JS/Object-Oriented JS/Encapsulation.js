function Person(name ,age){
    this.name=name
    let _age=age // private
    this.greet = function () {
        console.log(`Hello , my name is ${this.name} and i am ${_age} years old`)
    }

    this.getAge=function(){
        return _age
    }
    this.setAge=function(){
        if(age>0){
             _age=age
        }
        else{
            console.log("Invalid age")
        }
    }
}

let john=new Person("john",32)
console.log(john.name)
console.log(john._age)
console.log(john.greet())
console.log(john.getAge())