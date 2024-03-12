//1
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, network, cryptography

    setTimeout(function () {
        console.log("Async task 1 is complete")
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise 1 cosumed")
})

//2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 2000)
}).then(function () {
    console.log("Async 2 resolved")
})

//3
const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () { }, 1000)
    resolve({ username: "chai", email: "chai@example.gmail.com" })
})
PromiseThree.then(function (user) {
    console.log(user)
})

//4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "samidul", Pass: "123" })
        }
        else {
            reject("Error : Something went wrong")
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("The Promise was either resolve or rejected")
    })

//5 handle promise using async-await
const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", Pass: "123" })
        }
        else {
            reject("Error : JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log("RESPONSE")
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// take data from my github account url
async function getAllAboutMe() {
    const response = await fetch('https://api.github.com/users/SamidulSk')
    const data = await response.json()
    console.log(data)
}
getAllAboutMe()


// do this using .then
fetch('https://api.github.com/users/SamidulSk').then( (response)=>{
    return response.json()
})
.then( (data)=>{
 console.log(data)
})
.catch( (error)=>{
    console.log(error)
})