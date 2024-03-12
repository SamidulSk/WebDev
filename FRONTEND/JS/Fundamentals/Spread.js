 //new array
//  let nums=[10,20,30,40]
//  let newArr=[...nums]
//  newArr[1]=78
//  console.log(nums)
//  console.log(newArr)

//  //adding new element
//  let arr=[10,20]
//  let newArr2=[...arr,40]
//  console.log(newArr2)


// //concatenate two array
// let arr1=[20,40,60]
// let arr2=[10,30,50]
// let finalArr=[...arr1,...arr2]
// console.log(finalArr)

//sperad an array of arguments as individuals parameters

// let nums=[10,20,30]
// function calculateMax(num1,num2,num3){
//      return Math.max(num1,num2,num3)
// }

// console.log(calculateMax(...nums))

// can be uses with string
// let name='pw skills'

// let arrOfCharecter=[...name]
// console.log(arrOfCharecter)


//same for object
// let obj={
//     name:'pw skills',
//     course:"full stack web devlopment"
// }
// let NewObj={...obj,ratting:5}
// console.log(NewObj)

//spread operator with 2 object
let obj1={
    name:'pw skills',
    course:"full stack",
    review:4000
}
let obj2={
    ratting:5,
    review:5000
}

let finalObject={...obj1,...obj2}
console.log(finalObject)