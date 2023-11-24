document.addEventListener('DOMContentLoaded', function () {
    // Get references to the paragraph and button elements
    var myParagraph = document.getElementById('myParagraph');
    var colorButton = document.getElementById('colorButton');
  
    // Set the initial text color to black
    myParagraph.style.color = 'black';
  
    // Counter to keep track of the number of clicks
    var clickCount = 0;
  
    // Add click event listener to the button
    colorButton.addEventListener('click', function () {
      // Increment the click count
      clickCount++;
  
      // Use a switch statement to handle different click counts
      switch (clickCount) {
        case 1:
          // Clicking once changes text color to red
          myParagraph.style.color = 'red';
          break;
        case 2:
          // Clicking twice changes text color to green
          myParagraph.style.color = 'green';
          break;
        case 3:
          // Clicking three times changes text color to blue
          myParagraph.style.color = 'blue';
          break;
        case 4:
          // Clicking four times brings text color back to red
          myParagraph.style.color = 'red';
          // Reset the click count to restart the sequence
          clickCount = 0;
          break;
        default:
          // Reset click count for unexpected cases
          myParagraph.style.color = 'black';
          clickCount = 0;
          break;
      }
    });
  });
  