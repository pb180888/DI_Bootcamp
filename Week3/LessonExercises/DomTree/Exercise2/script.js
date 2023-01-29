let div1 = document.querySelector("body").firstElementChild;
console.log(div1);
let div2 = document.querySelector("div");
console.log(div2);
let ul1 = document.querySelector("div").nextElementSibling;
console.log(ul1);
let ul2 = ul1.innerHTML;
console.log(ul2);
for (let each of document.getElementsByTagName("ul")) {
    if (each.matches("ul")[0]) {
        console.log(each);
    }
}