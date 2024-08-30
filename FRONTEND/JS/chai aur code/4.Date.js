// let myDate = new Date();
// console.log(myDate) //2024-08-30T04:34:09.100Z
// console.log(myDate.toString()) //Fri Aug 30 2024 10:04:09 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) //Fri Aug 30 2024
// console.log(myDate.toLocaleString()) //8/30/2024, 10:04:09 AM
// console.log(myDate.toISOString()) //2024-08-30T04:34:09.100Z
// console.log(myDate.toJSON()) //2024-08-30T04:34:09.100Z
// console.log(myDate.toLocaleDateString())//8/30/2024
// console.log(typeof myDate) //object

// let myCreateDate=new Date(2024,0,23,5,3)
// console.log(myCreateDate.toLocaleString())
// let myCreateDate2=new Date("01-14-2023")
// console.log(myCreateDate2.toLocaleDateString()) //1/14/2023

//Time Stamp
// let myTimeStamp=Date.now() // in milisecond
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // in second without decimal


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())