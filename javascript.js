const container = document.querySelector(".container")

size = 16;
for(i= 0; i < size; i++){
    const verticalContainer = document.createElement("div");
    verticalContainer.setAttribute("class", "verticalContainer");
    container.appendChild(verticalContainer);
    for(j= 0; j < size; j++){
        const horizontalContainer = document.createElement("div");
        horizontalContainer.setAttribute("class", "horizontalContainer");
        verticalContainer.appendChild(horizontalContainer);
    }
}