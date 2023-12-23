document.addEventListener('DOMContentLoaded', function () {
  // Reference the button
  const fetchDataButton = document.getElementById('fetchDataButton');

  // Add a click event listener to the button
  fetchDataButton.addEventListener('click', function () {
    // Fetch data from the server
    fetch('/goodbye')  // Update the URL to match your server route
      .then(response => response.json())
      .then(data => {
        // Update the HTML content with the received data
        // Assuming data is an array of objects, you might need to iterate over it
        data.forEach(item => {
          // Create HTML elements and append them to the document
          const listItem = document.createElement('li');
          listItem.textContent = `${item.name}: ${item.Topic}`;
          document.getElementById('dataList').appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
});
