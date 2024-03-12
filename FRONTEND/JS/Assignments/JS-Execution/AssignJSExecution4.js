
{
    console.log(x);  //undefined
    console.log(y);   //ReferenceError: Cannot access 'y' before initialization
    console.log(z);  //ReferenceError: Cannot access 'z' before initialization


    var x = "pw";
    let y = "hello";
    const z = "js";


    console.log(x);
    console.log(y);
    console.log(z);
}