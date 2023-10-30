// Get references to the elements
const inputText = document.getElementById("input-text");
const outputSpan = document.getElementById("output");
const uppercaseBtn = document.getElementById("uppercase-btn");
const lowercaseBtn = document.getElementById("lowercase-btn");
const resetBtn = document.getElementById("reset-btn");

// Function to update the output span with the provided text
function updateOutput(text) {
    outputSpan.textContent = text;
}

// Uppercase functionality
uppercaseBtn.addEventListener("click", () => {
    const inputValue = inputText.value;
    const uppercaseText = inputValue.toUpperCase();
    inputText.value = uppercaseText; // Update the input field with the uppercase text
    updateOutput(uppercaseText); // Update the output span with the uppercase text
});

// Lowercase functionality
lowercaseBtn.addEventListener("click", () => {
    const inputValue = inputText.value;
    const lowercaseText = inputValue.toLowerCase();
    inputText.value = lowercaseText; // Update the input field with the lowercase text
    updateOutput(lowercaseText); // Update the output span with the lowercase text
});

// Reset functionality
resetBtn.addEventListener("click", () => {
    inputText.value = ""; // Clear the input field
    updateOutput(""); // Clear the output span
});
