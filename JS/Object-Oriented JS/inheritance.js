class Animal{
    constructor(name){
        this.name= name
    }
}

class dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
}