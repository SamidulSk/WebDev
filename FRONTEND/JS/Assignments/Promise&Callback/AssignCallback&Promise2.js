// maniupulate string converts the charecters into uppercase latter

function manipulateString(str, logFunction) {
    return logFunction(str);
}

function logString(str) {
    let newStr = str.toUpperCase();
    return newStr;
}

console.log(manipulateString("The manipulated string is: "+'hello world!', logString));
