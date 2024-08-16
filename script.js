//Square divs 16 x 16
for (let rows = 0; rows < 16; rows++) {
  const row = document.createElement("div");
  row.classList.add("rows");

  for (let cols = 0; cols < 16; cols++) {
    const col = document.createElement("div");
    row.appendChild(col);
    col.classList.add("column");
  }
  document.querySelector(".container").appendChild(row);
}

//Hover Effect
//not onmouseover just mouseover
const col = document.querySelectorAll(".column");

for (const column of col) {
  column.addEventListener("mouseover", () => {
    column.setAttribute("style", "background: red");
  });
}
