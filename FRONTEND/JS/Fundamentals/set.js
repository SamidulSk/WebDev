const setExample=new Set();
setExample.add(12)
setExample.add(40)
setExample.add(12)
console.log(setExample.size)
console.log(setExample)
//setExample.clear()
console.log(setExample.size)
setExample.delete(40)
console.log(setExample)
setExample.add("John")
setExample.add({
    liles:'javaScript'
})
console.log(setExample)
console.log(setExample.entries())


const data = new Set();
data.add(10)
data.add(20)
data.add(30)
data.add(40)
console.log(data.has(20))
console.log(data.keys())

let arr=[10,20,30,40,10,20,]  // array to set
const NewSet=new Set(arr);
console.log(NewSet)
console.log(Array.from(NewSet))  //set to array