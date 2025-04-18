const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

const DEFAULT_SIZE = 16;

function createGrid(size) {
  for (i = 0; i < size; i++) {
    const verticalContainer = document.createElement("div");
    verticalContainer.setAttribute("class", "verticalContainer");
    container.appendChild(verticalContainer);
    for (j = 0; j < size; j++) {
      const horizontalContainer = document.createElement("div");
      horizontalContainer.classList.add("horizontalContainer");
      verticalContainer.appendChild(horizontalContainer);

      horizontalContainer.addEventListener("mouseover", () => {
        horizontalContainer.classList.add("hovered");
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
