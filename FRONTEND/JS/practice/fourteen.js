//reverse a string
let str = "hello";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i)
}
//console.log(result);

//array to string
let arr=[56,6,2,6,2];
let string=arr.join('');
console.log(typeof(string)+string)
