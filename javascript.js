const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

const DEFAULT_SIZE = 16;

function createGrid(size) {
  for (i = 0; i < size; i++) {
    const verticalContainer = document.createElement("div");
    verticalContainer.setAttribute("class", "verticalContainer");
    container.appendChild(verticalContainer);
    for (j = 0; j < size; j++) {
      let horizontalContainer = document.createElement("div");
      horizontalContainer.classList.add("horizontalContainer");
      horizontalContainer.style.opacity = 0;
      verticalContainer.appendChild(horizontalContainer);

      horizontalContainer.addEventListener("mouseover", function(e) {
        horizontalContainer.style.backgroundColor = "black";
        if (e.target.style.opacity < 1) {
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1
        }
      });
    }
  }
}

createGrid(DEFAULT_SIZE);

resetButton.addEventListener("click", () => {
    let gridSize = 0;
    while (gridSize > 100 || gridSize <= 0 || !Number.isInteger(gridSize)) {
      gridSize = parseInt(prompt("What grid size do you want?"));
    }
    container.replaceChildren();
    createGrid(gridSize)
  });
