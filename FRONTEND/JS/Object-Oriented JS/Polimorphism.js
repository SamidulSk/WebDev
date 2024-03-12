class Animal{
    constructor(name){
        this.name=name
    }
    makeSound(){
        console.log("some sound")
    }
}

class dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    makeSound(){
        console.log("Woof Woof")
    }
}
class cat extends Animal{
    constructor(name,color){
        super(name)
        this.color=color
    }
    makeSound(){
        console.log("Meow")
    }
}

const generic=new Animal("Gen")
const d1=new dog("ted","GR")
const c1=new cat('Tom','white')

generic.makeSound()
d1.makeSound()
c1.makeSound()