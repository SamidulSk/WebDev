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
//

function loginUser(username){
    return `${username} just login`
}
console.log(loginUser("Hossain"))


///rest operator
function calculateCartPrice(val1, ...num){
    return num   // return a array of values
}
console.log(calculateCartPrice(200,400,500,2000))

// passing object to function
const user={
    userName:"samidul",
    prices:199
}
function handleObject(anyObject){
    console.log(` username is ${anyObject.userName} and price is ${anyObject.priceeeeeeeee}`)
}

handleObject(user)

// passing arrry to function
function myfunReturnFirst(arr){
    console.log(arr[0])
}

myfunReturnFirst([3,4,5])

// HOISTING
console.log(cubeNum(3));

function cubeNum(n) {
    return n ** n;
}


//  expression -> variable hold the function

//console.log(num(3))
const num= function(n){
    return n**n;
}
