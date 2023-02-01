// 1. Get the value of the 2nd Option
// 2. Add a new option with the value 'Work' at the end of the select form
// 3. Add a new option with the value 'Primary School' at the beginning of the select form
// 4. Change 'College' as selected. Use the 3 properties we learned above
// 5. Add a button that alert the choice selected

let x = document.getElementById("select1")
console.log(x);
x.selectedIndex = 2;
console.log(x.value);
let option = document.createElement("option");
option.value = "work";
let select = document.querySelector("select")
select.appendChild(option);
select.prepend(x);







