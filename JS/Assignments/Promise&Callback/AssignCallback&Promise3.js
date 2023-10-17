// calculate age in days and concatenate first and last name of a person
function ageinDays(person, logResult) {
    let full_name = person.first_name + " " + person.last_name;
    let ageInDays = person.age * 365;
    logResult(full_name,ageInDays);
}

function logResult(full_name,ageInDays) {
    console.log(`The Person's Full Name is ${full_name} and age in days is ${ageInDays}`);
}

let person = {
    first_name: 'sk',
    last_name: 'Hossain',
    age: 21
}

ageinDays(person, logResult);
