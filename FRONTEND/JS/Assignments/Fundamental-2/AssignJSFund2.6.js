// product details
const productDetails={
    name:'Apple laptop',
    price:82000,
    color:'grey',
    hardDisk:"256GB"
}
console.log("Below are the product details...");
for (let i of Object.keys(productDetails)) {
  console.log(`${i} : ${productDetails[i]}`);
}

// console.log("Below are the product details...");
// for (const [key, value] of Object.entries(productDetails)) {
//   console.log(`${key}: ${value}`);
// }

