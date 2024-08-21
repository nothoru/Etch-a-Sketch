const container = document.querySelector(".page-container");
const resize = document.querySelector("#resize");
const gridSize = document.querySelector("#gridSize-text");
const resizeBtn = document.querySelector("#resizeBtn");

function createGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    const row = document.createElement("div");
    row.classList.add("rows");

    for (let cols = 0; cols < size; cols++) {
      const col = document.createElement("div");
      let itemSize = 700 / size;
      col.setAttribute("style", `width:${itemSize}px; height:${itemSize}px`);
      row.appendChild(col);
      col.classList.add("column");
    }
    document.querySelector(".container").appendChild(row);
  }

  //HOVER OPTION
  const col = document.querySelectorAll(".column");
  for (const column of col) {
    column.addEventListener("mouseover", () => {
      column.style.background = " lightgreen";
    });
  }
}

createGrid(16);

function removeGrid() {
  const row = document.querySelectorAll(".rows");

  for (const r of row) {
    r.remove();
  }
}

resizeBtn.addEventListener("click", () => {
  removeGrid();
  let size = document.querySelector("#size").value;

  createGrid(size);
});
