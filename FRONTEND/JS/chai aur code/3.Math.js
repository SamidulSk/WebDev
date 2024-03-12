console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))  // naturral round
console.log(Math.ceil(4.7))   //round up
console.log(Math.floor(4.7))  // round down
console.log(Math.min(3, 5, 27, 6)) //3

console.log(Math.random())  // from 0 to 1
console.log(Math.random()*10+1) // from 1 to 10
console.log(Math.floor(Math.random()*10)+1)

// we need random number between 10 to 20
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)