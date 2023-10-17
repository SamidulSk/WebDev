function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
}

let rahul = new Person("Rahul", 32);
rahul.greet();
console.log(Person.prototype);
console.log(Person.prototype.constructor); 
