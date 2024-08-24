const container = document.querySelector(".container");
const colorPicker = document.querySelector("#colorPicker");
const color = document.querySelector("#color");
const random = document.querySelector("#random");
const eraser = document.querySelector("#eraser");
const clearCanva = document.querySelector("#clearCanva");
const gridRange = document.querySelector("#gridRange");
const gridValue = document.querySelector("#gridValue");

let activeMode = "color";

document.addEventListener("DOMContentLoaded", () => {
  createGrid(gridRange.value);
  gridValue.textContent = gridRange.value;
});

function createGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    const row = document.createElement("div");
    row.classList.add("rows");

    for (let cols = 0; cols < size; cols++) {
      const col = document.createElement("div");
      let itemSize = 700 / size;
      col.setAttribute("style", `width:${itemSize}px; height:${itemSize}px`);
      col.classList.add("column");
      row.appendChild(col);
    }
    container.appendChild(row);
  }

  gridTools();
}

function gridTools() {
  mode();

  //Hover
  const col = document.querySelectorAll(".column");
  for (const column of col) {
    column.addEventListener("mouseover", () => {
      if (activeMode == "color") column.style.background = colorGenerator();
      else if (activeMode == "random")
        column.style.background = colorGenerator();
      else if (activeMode == "eraser") column.style.background = "";
    });
  }

  clearCanva.addEventListener("click", () => {
    for (const column of col) {
      column.style.background = "";
    }
  });

  gridRange.addEventListener("click", () => {
    removeGrid();

    createGrid(gridRange.value);

    gridValue.textContent = gridRange.value;
  });
}

function removeGrid() {
  const row = document.querySelectorAll(".rows");

  for (const r of row) {
    r.remove();
  }
}

function colorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  if (activeMode == "color") return `${colorPicker.value}`;
  else if (activeMode == "random") return `rgb(${r}, ${g}, ${b})`;
}

function mode() {
  color.onclick = () => (activeMode = "color");
  random.onclick = () => (activeMode = "random");
  eraser.onclick = () => (activeMode = "eraser");
}
