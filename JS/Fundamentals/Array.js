// using sqare braket
let numberArray=[10,20,30,67];
console.log(numberArray);

//using array constructor
let fruits=new Array("Apple","Oranges","Bananas");
console.log(fruits)

//using array literal 

let mixedArray= Array('Apples',true,10,'samidul');
console.log(mixedArray)

console.log(mixedArray.length)

numberArray[1]="sk";
console.log(numberArray)

delete numberArray[2]
console.log(numberArray)

let nums=[10,20,30,40]
//for loop
for(let i=0;i<nums.length;i++){
    console.log("index at " + i + " value is " + nums[i])
}
//for of loop
for(let i of nums){
    console.log("value is "+ i)
}