document.addEventListener('DOMContentLoaded', function () {
    // Set Storage Button Click Event
    document.getElementById('setStorage').addEventListener('click', function () {
      // Save the input value to local storage with key 'myKey'
      localStorage.setItem('myKey', document.getElementById('storageKey').value);
    });
  
    // Get Storage Button Click Event
    document.getElementById('getStorage').addEventListener('click', function () {
      // Retrieve the value from local storage with key 'myKey'
      document.getElementById('output').innerText = localStorage.getItem('myKey');
    });
  });
  