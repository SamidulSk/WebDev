let arr = [2, 3, 4]
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow:", index, element, arr)
})

//example
const heros = ["naagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => {
    console.log(el.toUpperCase())

})
//map
heros.map(function (el, index, heros) {
    console.log(index, el, heros)
})

heros.map((h) => {
    console.log(h.toUpperCase())
})
//filter
console.log(heros)
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(herosWithRaj)

//shoppin cart
// const cartBill = [20, 30, 50]
// let totalBill = 0;
// cartBill.forEach((item) => {
//     totalBill = totalBill + item;
// })
// console.log(totalBill)

//reduce
const cartBill = [20, 30, 50];
const sumOfcartBill = cartBill.reduce((prev,curr) => prev+curr, 0);
console.log(sumOfcartBill);



//Game Score
const gameScore=[200,300,310,250,150,"33"]

//every
// check if all values are numbers
const gameScoreCheck=gameScore.every((v)=> typeof v==='number')
console.log(gameScoreCheck)

// find score above 200

const above200=gameScore.find((score)=> score>200)
console.log(above200)

//findIndex
// findIndex(callbackFn, thisArg)
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

//some****
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

//sort
const array2 = [1, 30, 4, 21, 100];
array2.sort();
console.log(array2);

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

let names=["Anurag","Mithun","Alka","Prabir","Vinay"]
names.sort();
console.log(names)