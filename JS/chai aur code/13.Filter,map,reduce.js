//using forEach loop when we wand to return items and try to store it into a varible -> this is not aplicable
// introducing filter function
const myNums = [1, 2, 3, 4, 5, 7, 8, 9, 0]
const newNums = myNums.filter((num) => (num > 4))
//console.log(newNums)

const newNums2 = myNums.filter((num) => {  // explicite return
    return num < 7
})
//console.log(newNums2)


//try this using forEach
const newArr = []
myNums.forEach((item) => {
    if (item > 5) {
        newArr.push(item)
    }
})

//console.log(newArr)


// chaining
const myNumbers = [3, 6, 5, 4, 7, 0, 9, 8, 2]
const newNumbers = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
//console.log(newNumbers)


// reduce
const myNums3 = [1, 2, 3]

const total = myNums3.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval:${currval}`)
    return acc + currval
}, 0)

console.log(total)

const mytotal=myNums3.reduce(  (acc,curr)=>(acc+curr),0)
console.log(mytotal)