const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

// Set 'draggable' attribute to true for the draggable element
dragItem.setAttribute("draggable", true);

// Dragstart event listener to handle when the item starts being dragged
dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "Drag Item"); // Set the data to be transferred
});

// Dragover event listener to handle when the item is dragged over the drop zone
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow dropping
    dropZone.style.backgroundColor = "lightblue"; // Change the color when the item is dragged over
});

// Dragleave event listener to handle when the item is dragged away from the drop zone
dropZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropZone.style.backgroundColor = "lightgray"; // Reset the color when the item is dragged away
});

// Drop event listener to handle when the item is dropped into the drop zone
dropZone.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent the default drop behavior
    dropZone.style.backgroundColor = "green"; // Change the color when the item is dropped
});
