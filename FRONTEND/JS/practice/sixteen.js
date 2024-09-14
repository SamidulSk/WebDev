// // .then .catch == async await so we can handle promises by both of them
// const promise = new Promise(function (resolve, reject) {
//     // we do async task in promise which may be fulfiled or may be rejected
//     //db call , network call
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve([1, 2, 3]);
//             console.log("promise is fulfulied");
//         }
//         else {
//             reject("ERRor!! something went wrong")
//         }
//     }, 2000);


// })
// promise
//     .then(function (arr) {
//         console.log(arr);
//         return arr[2];
//     }).then((val) => {
//         console.log(val);
//     }).catch( (error)=>{
//         console.log(error)
//     })
//     .finally(() => console.log("Finally at the end"));

fetch('https://api.github.com/users/SamidulSk')
.then( function(response){
  return response.json();
})
.then( (data)=>{
    console.log(data)
})
.catch( function(error){
    console.log(error)
})