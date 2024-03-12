// calculate total cart value
function calculateTotalCartValue(...prices) {
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        totalPrice = totalPrice + prices[i];
    }
    return totalPrice;
}
console.log("The total cart value is " + calculateTotalCartValue(125, 20, 30))

//output: The total cart value is 175