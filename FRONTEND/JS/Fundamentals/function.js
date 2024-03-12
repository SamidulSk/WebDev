let a = 10;
let b = 20;
function add() {
    console.log(a + b);
}
add(); //function call


function mul(x, y) {
    console.log(x * y)
}
mul(4, 6);


// function under function
function x(callback) {
    console.log("Hello");
    callback()
}
function y() {
    console.log("Bye")
}

x(y)

//fuction with return
function add(m, n) {
    return m + n;
}
let p = add(9, 6);
console.log(p);

// function with single parametar
function greet(name) {
    console.log('Hello ' + name)
}
greet("rohan")
greet("samidul")

//function with default parameter
function greet(name = 'Guest') {
    console.log('Hello ' + name)
}
greet("rohan")
greet("samidul")
greet()

// function with multiple parameter
function calculateSum(num1, num2, num3) {
    return num1 + num2 + num3;
}
sum = calculateSum(5, 89, 2);
console.log(sum)

//passing array to function
const nums = [1, 2, 3, 4, 5];
function printArray(arr) {
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray(nums);

//don't know the number of argument

// 1 - using arguments
function allArguments() {
    console.log(arguments)
    console.log(arguments.length)
    const argsArray = Array.from(arguments)
    let sum = argsArray.reduce(function (acc, curr) {
        return acc + curr
    }, 0)
    return sum
}
console.log(allArguments(2, 4, 6));
console.log(allArguments(1, 6, 3, 9, 6));

// 2- using rest parameter
function sumofAll(...numbers){
  console.log(numbers)
  let total=0;
  for(let i=0;i<numbers.length;i++){
    total=total+numbers[i];
  }
  return total;
}

console.log(sumofAll(4,6,32));
