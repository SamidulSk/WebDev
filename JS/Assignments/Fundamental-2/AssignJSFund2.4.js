//  prrinting product with highest price and lowest price
const products = [
    { name: 'Laptop', price: 120000 },
    { name: 'Mobile', price: 70000 },
    { name: 'Laptop bag', price: 20000 },
    { name: 'Watch', price: 20000 },
    { name: 'Mobile charger', price: 1500 },
]

let maxProduct = { name: "", price: 0 };
let minProduct = { name: "", price: Number.MAX_VALUE };


for (let product of products) {
    if (product.price > maxProduct.price) {
        maxProduct = product;
    }
    if (product.price < minProduct.price) {
        minProduct = product;
    }
}

console.log(
    `The product with maximum ammount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`
);
console.log(
    `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
);

//output::
// The product with maximum ammount is Laptop which is priced at Rs. 120000
// The product with minimum ammount is Mobile charger which is priced at Rs. 1500