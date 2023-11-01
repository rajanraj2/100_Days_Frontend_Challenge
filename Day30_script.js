// Function to generate a random hex code
function generateRandomHexCode() {
	// Generate a random 6-digit hexadecimal color code
	const hexCode = Math.floor(Math.random() * 16777215).toString(16);
	return `#${hexCode}`;
  }
  
  // Function to generate a color palette
  function generateColorPalette() {
	// Get the 'colors' div element
	const colorsDiv = document.getElementById('colors');
  
	// Clear the existing content in the 'colors' div
	colorsDiv.innerHTML = '';
  
	// Generate and append 5 random color blocks
	for (let i = 0; i < 5; i++) {
	  // Create a new color block div
	  const colorBlock = document.createElement('div');
	  colorBlock.classList.add('color-block');
  
	  // Generate a random hex code
	  const hexCode = generateRandomHexCode();
  
	  // Set the background color and data-color attribute
	  colorBlock.style.backgroundColor = hexCode;
	  colorBlock.setAttribute('data-color', hexCode);
  
	  // Append the color block to the 'colors' div
	  colorsDiv.appendChild(colorBlock);
	}
  }
  
  // Attach the generateColorPalette function to the 'Generate Palette' button
  const generateButton = document.getElementById('generate');
  generateButton.addEventListener('click', generateColorPalette);
  
  // Initial call to generate the color palette when the page loads
  generateColorPalette();
  