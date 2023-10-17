class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    organization='TATA'
    greet(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

const rahul=new Person("'rahul",21)
rahul.greet()
console.log(rahul.organization)