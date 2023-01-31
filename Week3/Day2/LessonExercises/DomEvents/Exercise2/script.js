let x = document.getElementById("jsstyle");
x.addEventListener("click", RespondClick);
x.addEventListener("mouseout", RespondMouseOut);

function RespondClick() {
    x.style.backgroundColor = "red";
    x.style.color = "green";
}
function RespondMouseOut() {
    x.style.height = "250px";
    x.style.width = "500px";
    x.style.fontSize = "125px";
}