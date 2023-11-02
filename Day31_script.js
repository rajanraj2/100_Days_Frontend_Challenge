// Attach click eventListener to your fetchData button here and fetch data from https://jsonplaceholder.typicode.com/posts

// Display the fetched data as post titles in the 'postTitles' ul list
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and the ul element
    const fetchDataButton = document.getElementById("fetchData");
    const postTitlesList = document.getElementById("postTitles");
  
    // Add a click event listener to the 'fetchData' button
    fetchDataButton.addEventListener("click", function () {
      // Fetch data from the remote source
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          // Clear the existing list
          postTitlesList.innerHTML = "";
  
          // Loop through the data and create list items for each post title
          for (let i = 0; i < 20; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = data[i].title;
            postTitlesList.appendChild(listItem);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    });
  });
  