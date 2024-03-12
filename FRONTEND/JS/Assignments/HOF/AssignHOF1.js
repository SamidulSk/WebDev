// reverse a input string after a 2s

let input = "pwskills";

function revStr(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log("The Original string:"+input)
setTimeout(function() {
    console.log("The reversed string::"+revStr(input));
}, 2000);
