// Exercise 1 : Favorite Color
let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(' '));

// Exercise 2 : Mixup
let str1 = "alpha";
let str2 = "gamma";
console.log(str1.substring(0, 2) + str2.substring(2));
console.log(str2.substring(0, 2) + str1.substring(2));
lab = (str1.substring(0, 2) + str2.substring(2));
lav = (str2.substring(0, 2) + str1.substring(2));
str3 = (`${lab} ${lav}`);
console.log(str3);

// Exercise 3 : Mixup
var result = Number;
var num1 = Number(prompt("Enter the firts number:"));
var num2 = Number(prompt("Enter the second number:"));;
var sign = String(prompt("operation + - / *"));
if (sign === "+") {
    result = num1 + num2;
    alert(result);
}
else if (sign === "-") {
    result = num1 - num2;
    alert(result);
}
else if (sign === "/") {
    result = num1 / num2;
    alert(result);
}
else if (sign === "*") {
    result = num1 * num2;
    alert(result);
}
else

    alert("error");
