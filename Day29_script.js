// Get references to the button and the count-display elements
const button = document.getElementById("counter-btn");
const countDisplay = document.getElementById("count-display");

// Initialize the count
let count = 0;

// Function to update the count-display
function updateCountDisplay() {
  countDisplay.textContent = count;
}

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Increment the count
  count++;

  // Update the count-display
  updateCountDisplay();
});
