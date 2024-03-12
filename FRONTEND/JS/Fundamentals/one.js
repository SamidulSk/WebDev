console.log("Hello world")
console.log("PWSkills")

console.log("1")
console.log("2")
console.log("3")

let dividend = 10
let divisor = 0

if (divisor != 0) {
    let result = dividend / divisor
    console.log(result)
}
else {
    console.log("Your divisor is 0")
}

let age = 99
if (age < 18) {
    console.log("you are not eligible")
}
else {
    console.log("you are eligible")
}

let a = 10
let b = 146
let c = 54
if (a > b && a > c) {
    console.log(a + " is greater")
}
else if (b > a && b > c) {
    console.log(b + " is greater")
}
else {
    console.log(c + " is greater")
}
// ternary operator
a>b?console.log("a is greter than b"):console.log("b is greter than a")

//switch

let grade="B"
switch (grade) {
    case "A":
        console.log("Grade is A")
        break;
    case "B":
        console.log("Grade is B")
        break;
    case "C":
        console.log("Grade is C")
        break;

    default:
        console.log("Invalid Grade")
        break;
}

// loop
for(let i=0;i<=10;i++){
  console.log(i)
}

let i=3
while(i<10){
 console.log("sk")
 i++;
}

age=12
do {
    console.log("samidul")
    age++;
} while (age<16);
