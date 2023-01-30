// Using Javascript:
// 1. Retrieve the div and console.log it
// 2. Change the name “Pete” to “Richard”.
// 3. Change each first name of the two <ul>'s to your name.
// 4. Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// 5. Add a class called student_list to both of the <ul>'s.
// 6. Add the classes university and attendance to the first <ul>.



let div = document.querySelector("div");
console.log(div.innerHTML);
let ul = document.querySelector('ul > li:last-child').innerText = "Richard";
const change = document.querySelectorAll('ul');
change.forEach(change => change.firstElementChild.textContent = "Paul");
let rmv = change[1].children[1].remove();

change.forEach(change => change.classList.add("student_list"));
let classes = document.querySelector("ul").classList.add("university", "attedance");