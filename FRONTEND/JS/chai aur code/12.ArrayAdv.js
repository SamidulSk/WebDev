// for of 
const arr = [3, 5, 2, 68, 8]
for (const element of arr) {
    //console.log(element)
}

const gretting = "Hello world!"
for (const ch of gretting) {
    if (ch == ' ') {
        break;
    }
    //  console.log(char)
}

const map = new Map() // unique value - COLLECTION OF KEY VALUE PAIRS
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India")

//console.log(map)

// for (const key of map) {
//     console.log(key)
// }

// for (const [key,value] of map) {  // de-structure
//     console.log(value)
// }
// ***for of loop is not aplicable on object

// INRODUCING FOR IN LOOP
// const myObject={
//     js:"javascript",
//     cpp:"C++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

//  for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`)
//  }
// for in loop in array
//  const arr2=[3,5,2,68,8]
// for (const element in arr2) {
//     console.log(arr2[element])
// }


// for Each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(item){
//     console.log(item)
// })

coding.forEach((element) => { // arrow
    // console.log(element)
})

function printMe(element,num,val){
   // console.log(element,num,val) 
}
coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })


//[ {},{},{},{}]  array of objects
 const myCoding=[
    {
  language:"javascipt",
  languageFileName:"js"
    },
    {
        language:"java",
        languageFileName:"java"
    },
    {
        language:"Python",
        languageFileName:"py"
    }
 ]

 myCoding.forEach( (item)=>{
    console.log(item.languageFileName)
 })