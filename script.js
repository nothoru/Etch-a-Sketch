const container = document.querySelector(".page-container");
const resize = document.querySelector("#resize");
const gridSize = document.querySelector("#gridSize-text");
const resizeBtn = document.querySelector("#resizeBtn");
const colorPicker = document.querySelector("#colorPicker");
const color = document.querySelector("#color");
const random = document.querySelector("#random");

let colorMode = true;
let randomMode = false;

color.addEventListener("click", () => {
  colorMode = true;
  randomMode = false;
});

random.addEventListener("click", () => {
  randomMode = true;
  colorMode = false;
});

createGrid(4);

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

  gridTools();
}

function gridTools() {
  //HOVER OPTION
  const col = document.querySelectorAll(".column");
  for (const column of col) {
    column.addEventListener("mouseover", () => {
      let r = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);

      if (colorMode) column.style.background = `${colorPicker.value}`;
      else if (randomMode) column.style.background = `rgb(${r}, ${g}, ${b})`;
    });
  }
}

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
