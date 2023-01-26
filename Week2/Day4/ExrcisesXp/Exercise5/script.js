// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
//     an item price
//     and an array representing the amount of change in your pocket.

// 2. In the function, determine whether or not you can afford the item.
//     If the sum of the change is bigger or equal than the item’s price(ie.it means that you can afford the item), the function should    return true
//     If the sum of the change is smaller than the item’s price(ie.it means that you cannot afford the item) the function should return false

// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// function changeEnough(itemPrice, amountOfChange) {
//     const sum = calculateSum(amountOfChange)
//     if (sum > itemPrice) {
//         return true
//     } else {
//         return false
//     }
// }


// function calculateSum(arr) {
//     let sum = 0
//     for (const num of arr) {
//         sum = sum + arr
//     }
//     return sum
