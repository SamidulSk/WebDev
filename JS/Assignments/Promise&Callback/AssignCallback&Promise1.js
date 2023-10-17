// write a function that takes array of integers and a callback function and return a new array 
// where each element is doubled using callback
function doubledArr(arr, doubleArrayCallback) {
    return doubleArrayCallback(arr);
}

const arr = [3, 5, 7, 8];
 
function doubleArray(arr) {
    const doubled = arr.map(element => element * 2);
    return doubled;
}

const resultArr = doubledArr(arr, doubleArray);
console.log(resultArr);
