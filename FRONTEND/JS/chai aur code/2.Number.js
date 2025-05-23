const balance=new Number(100)
console.log(balance)  //[Number: 100]
console.log(balance.toString())//100
console.log(balance.toFixed(2))//100.00
console.log(balance.toPrecision(4)) //100.0 precise value(round off)

const hundrends=100000
console.log(hundrends.toLocaleString('en-IN'))
console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE)  //5e-324