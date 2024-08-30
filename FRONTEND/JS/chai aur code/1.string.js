let str="Samidul Is a Good boy" //=>  A string primitive


let str2= new String("Maidul Is also a good boy"); //-> A string object

// console.log(str.charAt(3));     //i
// console.log(str.indexOf('Good'));  //13
// console.log(str.toUpperCase())  //SAMIDUL IS A GOOD BOY
// console.log(str.concat(str,str2).toUpperCase())  //SAMIDUL IS A GOOD BOYSTRMAIDUL IS ALSO A GOOD BOY
// console.log(str.includes("Is"))  //true
// console.log(str.includes("hello"))  //false
// console.log(str.replace("Good","Bad"))  //Samidul Is a Bad boy
// console.log(str)  //Samidul Is a Good boy haha this is for pass by value
// console.log(str.slice(4,14))  //dul Is a G  slice -> accept negetive index
// console.log(str.trim())

console.log(str.split(" "))  //[ 'Samidul', 'Is', 'a', 'Good', 'boy' ]

const arr2=str.split('')
console.log(arr2[4]) //d
console.log(arr2) /*[
    'S', 'a', 'm', 'i', 'd',
    'u', 'l', ' ', 'I', 's',
    ' ', 'a', ' ', 'G', 'o',
    'o', 'd', ' ', 'b', 'o',
    'y'
  ]*/