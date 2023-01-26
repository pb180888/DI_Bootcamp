// 1. Add the stock and prices objects to your js file.
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3. Create a function called myBill() that takes no parameters.
// 4. The function should return the total price of your shoppingList.In order to do this you must follow these rules:
//       The item must be in stock. (Hint : check out if ..in)
//       If the item is in stock find out the price in the prices object.
// 5. Call the myBill() function.
// 6. Bonus: If the item is in stock, decrease the item’s stock by 1
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}
const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
const shoppingList = ["banana", "orange", "apple"]
function myBill() {
    const item = shoppingList[(prompt("Type the place: 0 - banana, 1 - orange, 2 - apple"))];
    const quantityInStock = stock[item];
    const checkPrice = prices[item];
    if (quantityInStock > 0) {
        let NEWquantityInStock = quantityInStock - 1;
        console.log(`Now item's stock: ${NEWquantityInStock}`);
        console.log(`The price: ${checkPrice}`);
    } else {
        alert("out stock")
    }
}
myBill();