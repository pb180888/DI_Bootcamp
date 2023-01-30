// 1. In the < div >, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// 2. We are going to add a new < li > to the < ul >.
//     First, create a new < li > tag(use the createElement method).
//     Create a new text node with “Logout” as its specified text.
//     Append the text node to the newly created list node(<li>).
//     Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// 3. Bonus - Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let changeValue = document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");
const li = document.createElement("li");
console.log(li);
const Logout = document.createTextNode("Logout");
console.log(Logout);
li.appendChild(Logout);
const ul = document.querySelector("ul");
console.log(ul);
ul.appendChild(li);
const first = document.querySelector("ul").firstElementChild.textContent;
console.log(first);
const last = document.querySelector("ul").lastChild.textContent;
console.log(last);