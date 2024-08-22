const container = document.querySelector(".page-container");
const resize = document.querySelector("#resize");
const gridSize = document.querySelector("#gridSize-text");
const resizeBtn = document.querySelector("#resizeBtn");
const colorPicker = document.querySelector("#colorPicker");
const color = document.querySelector("#color");
const random = document.querySelector("#random");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");

let colorMode = true;
let randomMode = false;
let eraserMode = false;
let clearMode = false;

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
    column.addEventListener("click", () => {
      let r = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);

      if (colorMode) {
        column.style.background = `${colorPicker.value}`;
        console.log("usehere");
      } else if (randomMode) column.style.background = `rgb(${r}, ${g}, ${b})`;
      else if (eraserMode) column.style.background = "white";
    });
  }

  color.addEventListener("click", () => {
    colorMode = true;
    randomMode = false;
    eraserMode = false;
    clearMode = false;
  });

  random.addEventListener("click", () => {
    randomMode = true;
    colorMode = false;
    eraserMode = false;
    clearMode = false;
  });

  eraser.addEventListener("click", () => {
    eraserMode = true;
    randomMode = false;
    colorMode = false;
    clearMode = false;
  });

  clear.addEventListener("click", () => {
    clearMode = true;
    eraserMode = false;
    randomMode = false;
    colorMode = false;

    for (const column of col) {
      column.style.background = "white";
    }
  });

  resizeBtn.addEventListener("click", () => {
    removeGrid();
    let size = document.querySelector("#size").value;

    createGrid(size);
  });
}

function removeGrid() {
  const row = document.querySelectorAll(".rows");

  for (const r of row) {
    r.remove();
  }
}
