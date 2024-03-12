function cretePromise() {
    return new Promise(function exec(resolve, reject) {
        //your code goes here
        setTimeout(function f() {
            console.log("timer done");
            resolve("done")
        },3000);
    });
}

async function consume(){
    console.log("inside function");
    const response= await cretePromise();
    console.log("response is "+response)
}
consume();