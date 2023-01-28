// You have to decide which type of variables you have to use
// 1. Create a global variable that save the amount of money you have in your account
// 2. Create a variable that saves the amount of VAT
// 3. Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
// 4. Create a JS code that multiplies of the expenses by the VAT
// 5. Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
// 6. Display it

let amountMoney = Number;
let vat = Number;
let revenuePastMonth = Number(prompt("Enter your revenue"));
let expensesPastMonth = Number(prompt("Enter your expenses"));

vat = expensesPastMonth * 0.18;
amountMoney = expensesPastMonth - revenuePastMonth - vat;
console.log(amountMoney);