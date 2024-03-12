//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello , my name is ${this.name} and i am ${this.age} years old`)
    }
}
let johndoe = Person("johndoe", 21)
let rahul = new Person("Rahul", 22)
rahul.greet()

//factory function
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            console.log(`Hello , my name is ${this.name} and i am ${this.age} years old`)
        }
    }
}
let jane = createPerson("jane",23)
let janifer =createPerson("janifer",22)
jane.greet()
janifer.greet()