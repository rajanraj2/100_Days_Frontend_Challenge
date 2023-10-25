// Import the DOM elements
const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");
const colorCode = document.getElementById("colorCode");

// Add the event listener for #colorPicker element
colorPicker.addEventListener("input", function() {
    // Capture the selected color from the colorPicker
    const selectedColor = colorPicker.value;

    // Set the captured color as the background color of #colorDisplay
    colorDisplay.style.backgroundColor = selectedColor;

    // Show the color Hex Code in the #colorCode element
    colorCode.textContent = selectedColor;
});
