// 1. to add rows to a table.
function add() {
    const td = document.createElement("td");
    const node = document.createTextNode("This is new")
    td.appendChild(node);
    const tr = document.querySelector("tr");
    tr.appendChild(td)
}
add();