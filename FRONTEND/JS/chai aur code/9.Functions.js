function sayMyName(){
    console.log("Samidul")
}

sayMyName()

function addNum(num1,num2){
    let result=num1+num2
    return result;
}

const final=addNum(3,6)
console.log(final)

///rest operator
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,400,500,2000))

// passing object to function
const user={
    userName:"samidul",
    prices:199
}
function handleObject(anyObject){
    console.log(` username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)

// passing arrry to function
function myfunReturnFirst(arr){
    console.log(arr[0])
}

myfunReturnFirst([3,4,5])