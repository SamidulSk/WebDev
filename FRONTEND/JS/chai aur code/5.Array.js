// const myArr=[0,1,2,3,4,'sami']  // shallow copy- same reference
// const myArr2=new Array(2,4,5,6,'sk',54)
// //console.log(myArr[3])
// //console.log(myArr2[4]) //sk

// // methods
// myArr.push(6)
// //console.log(myArr)
// //console.log(myArr.pop())

// console.log(myArr.unshift(9)) // push on head
// myArr.shift() // remove from head
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join();
// console.log(newArr)  //0,1,2,3,4,sami,6  -> string

// slice, splice


// const arr=new Array(0,1,2,3,4,5,6)
// console.log("A" ,arr)

// const myArr1=arr.slice(1,3)  // it does'nt manupulate the original array
// console.log(myArr1)
// console.log("B",arr)

// const myArr2=arr.splice(1,3)   // it manupulate the original array ,also ending index in included
// console.log(myArr2)
// console.log("C",arr)

const marvel_heros=['sk','suso','grm']
const dc_heros=['prit','bik','ark']

const all_heors=marvel_heros.concat(dc_heros)
console.log(all_heors)

// spread
const all_hero=[...marvel_heros,...dc_heros]
console.log(all_hero)

console.log(Array.isArray("samidul")) //false
console.log(Array.from("samidul"))  //charecter array

console.log(Array.from({name:"hitesh"})); //[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))