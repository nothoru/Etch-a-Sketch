const container = document.querySelector(".page-container");
const resize = document.querySelector("#resize");

//Square divs 16 x 16
function createGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    const row = document.createElement("div");
    row.classList.add("rows");

    for (let cols = 0; cols < size; cols++) {
      const col = document.createElement("div");
      row.appendChild(col);
      col.classList.add("column");
    }
    document.querySelector(".container").appendChild(row);
  }

  const col = document.querySelectorAll(".column");
  for (const column of col) {
    column.addEventListener("mouseover", () => {
      column.setAttribute("style", "background: lightgreen");
    });
  }
}

createGrid(16);

//Resizing the grid
resize.addEventListener("click", () => {
  removeGrid();

  let size = parseInt(prompt("Size?"));

  createGrid(size);
});

function removeGrid() {
  const row = document.querySelectorAll(".rows");

  for (const r of row) {
    r.remove();
  }
}
