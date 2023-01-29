let div1 = document.querySelector("body").firstElementChild;
console.log(div1);
let div2 = document.querySelector("div");
console.log(div2);
let ul1 = document.querySelector("div").nextElementSibling;
console.log(ul1);
let ul2 = ul1.nextElementSibling;
console.log(ul2);
console.log(ul1.innerHTML);
console.log(ul2.innerHTML);

let elements = document.querySelectorAll('ul > li:first-child');
for (let elem of elements) {
    console.log(elem.innerHTML);
}
