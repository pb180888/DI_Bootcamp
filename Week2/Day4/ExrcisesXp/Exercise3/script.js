// 1. Create a function call isDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// 5. Bonus: Add a parameter divisor to the function.
let sum = 0;
let divisor = Number(prompt("Type divisor"));
function isDivisible(divisor) {
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0)
            sum = sum + i;
    }
    console.log(sum);
}
isDivisible(divisor);
