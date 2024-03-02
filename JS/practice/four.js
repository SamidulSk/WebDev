// string
const gameName=new String("freefire.india.ac.com");
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.lastIndexOf('e'))
console.log((gameName.split(".",))[1])
console.log(`Hello in am playing ${gameName} from last 5 year` )

// number
const score=new Number(326);
console.log(score)
console.log(typeof(score.toString()));
console.log(score.toFixed(2))
const otherNumber=23.5425;
console.log(otherNumber.toPrecision(3))

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'))
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
// math
console.log(Math.abs(-3));
console.log(Math.round(23.334));
console.log(Math.ceil(23.334));
console.log(Math.floor(23.334));
// generate random number between 15 to 80
const min=15;
const max=30;

console.log((Math.ceil(Math.random()*(max-min)))+min)

///date
let myDate=new Date();
console.log(myDate)
console.log(myDate.toISOString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())

let mycreatedDate=new Date(2024,0,4);
console.log(mycreatedDate.toDateString())

let myTimeStamp=Date.now();
console.log(Math.floor(myTimeStamp/1000))// second