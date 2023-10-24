// Get references to the form, textarea, error paragraph, and comment list
const commentForm = document.getElementById('commentForm');
const commentTextarea = document.getElementById('comment');
const errorParagraph = document.getElementById('error');
const commentList = document.getElementById('commentList');

// Add an event listener to the form for submission
commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Get the value of the comment from the textarea
  const commentText = commentTextarea.value.trim();

  if (commentText === '') {
    // Display an error message if the comment is empty
    errorParagraph.textContent = 'Error: Please enter a comment.';
  } else {
    // Clear the error message
    errorParagraph.textContent = '';

    // Create a new list item for the comment and add it to the comment list
    const listItem = document.createElement('li');
    listItem.textContent = commentText;
    commentList.appendChild(listItem);

    // Clear the textarea after submitting
    commentTextarea.value = '';
  }
});
