// create object of car and write function to display all properties

let car={
    make:"Nissan",
    model:"Altima",
    year:2023
}

function displayProp(car){
    for(const key of Object.keys(car)){
         console.log(`${key} : ${car[key]}`)
    }
}

displayProp(car);