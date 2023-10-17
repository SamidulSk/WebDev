// check a object has a specified property or not
function checkProperty(obj,name){
    return obj.hasOwnProperty(name)
}


const obj={
    name:"samidul",
    age:20,
    religion:"muslim"
}
console.log(checkProperty(obj,'age'))

//output:: true