// function which take object as input and return number of properties it has

function countProp(obj){
    let totalcount=Object.keys(obj).length
    console.log(totalcount)
}

const exampleObject ={ x:23,b:53,c:32}
console.log(countProp(exampleObject))