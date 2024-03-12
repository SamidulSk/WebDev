//add on end
let numbers = [20, 20, 30, 40]
numbers.push(50);
console.log(numbers)

//remove from end
let popedItem = numbers.pop()
console.log(popedItem)

//add on start
numbers.unshift(5)
console.log(numbers)

//remove from start
let removedItem = numbers.shift();
console.log(removedItem)

//***slice
let arr = ["I", "love", "JavaScript"];
console.log(arr.slice(1, 3))  // it return the sliced array
console.log(arr)
console.log(arr.slice())  //copy of array

//***splice(add,delete,replace)

//delete
arr.splice(1, 2)
console.log(arr)
//delete&replace
let arr2 = ["I", "Study", "Programming", "right", "Now"];
let removedElement = arr2.splice(0, 3, "Listen", "Music")
console.log(removedElement)
console.log(arr2)
//insert
arr2.splice(4, 0, "and", "enjoy")
console.log(arr2)

//****concat
let arr3=[10,20]

console.log(arr3.concat([30,40]))
console.log(arr3.concat([30,40],[50,60]))
console.log(arr3.concat([30,40],50,60))

//***indexof
let nums2=[1,0,false]
console.log(nums2.indexOf(0))
console.log(nums2.indexOf(false))
console.log(nums2.indexOf(2434))

//***includes or not
console.log(nums2.includes(23))
console.log(nums2.includes(1))

//***find for search
let users=[  // array of objects
    {id:1,name:"raj"},
    {id:2,name:"diraj"},
    {id:3,name:"mohit"},
]
let user=users.find(function(item,index,array){
    return item.id==1
})
console.log(user)

//***findIndex
let user2=users.findIndex(function(item,index,array){
    return item.name=="mohit"
})
console.log(user2)

// ***reverse
let nums=[10,30,23,43,53]
nums.reverse()
console.log(nums)

//***split and join
  //string to array
let names=  'john,Peer,sahil'
let man=names.split(',')
console.log(man)
//array to string
let str=man.join(",")
console.log(str)