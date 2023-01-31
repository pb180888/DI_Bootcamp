let x = document.querySelector("div");
x.addEventListener("click", changeStyle);
let y = document.getElementById("jsstyle")
y.addEventListener("mouseout", changeBotton)

function changeStyle() {
    x.style.backgroundColor = "gold";

}

function changeBotton() {
    y.style.backgroundColor = "black";
    y.style.color = "silver";
    y.style.height = "125px"
    y.style.width = "250px";
    y.style.fontSize = "70px";
}