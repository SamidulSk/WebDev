// rest operator

//collecting all remaining parameters in a function

// function sumOfAllNumbers(...numbers){
//    return numbers.reduce((acc,curr)=> acc+curr,0)

  
// }
// console.log(sumOfAllNumbers(1,2,3,4))


//destructing

let arr=['HTML','CSS','JS','REACT','NODE','EXPRESS','GIT'];

let [element1,element2,...remainingElements]=arr
console.log(element1,element2)
console.log(remainingElements)