// 1. Add a “light blue” background color and some padding to the <div>.
// 2. Do not display the <li> that contains the text node “John”.
// 3. Add a border to the <li> that contains the text node “Pete”.
// 4. Change the font size of the whole body.
// 5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let background = document.querySelector("div").style.background = "lightBlue";
let DontDisplay = document.querySelector("ul").children[0].style.display = "none";
let border = document.querySelector("ul").children[1].style.border = "solid 2px";
let fontSize = document.querySelector("body").style.fontSize = "20px";
if (background) {
    alert(`Hello ${document.querySelector("ul").children[0].innerHTML} and ${document.querySelector("ul").children[1].innerHTML}`)
}