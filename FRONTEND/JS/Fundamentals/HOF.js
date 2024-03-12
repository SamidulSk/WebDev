// function as argument
const powerTwo=(n)=>{
    return n**2
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n
}

console.log(powerCube(powerTwo,3))

// function as return type
function sayHello(){
    return ()=>{
        console.log("Hello Hitesh")
    }
}

let guessValue=sayHello();
console.log(guessValue);
guessValue();


// nested function
const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m+n+p
        }
        return twoFun;
    }
    return oneFun;
}

console.log(higherOrder(2)(3)(4))

//use
const myNums=[2,3,4,5]

const sumArray = arr => {
    let total =0;
    arr.forEach(function(element) {
        total+=element
    });
    return total;
}
console.log(sumArray(myNums))

function oneMoreHello(){
    console.log("Hello Samidul !" , Math.random())  
}

setInterval(oneMoreHello,1000); //execute in every 1s
//setTimeout(oneMoreHello,2000) //execute once after 2s