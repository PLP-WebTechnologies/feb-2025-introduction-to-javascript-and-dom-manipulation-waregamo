// Get references to the DOM elements
const button = document.getElementById('actionButton');
const text = document.getElementById('text');
const dynamicDiv = document.getElementById('dynamicDiv');

// Initially hide the dynamic div
dynamicDiv.style.display = "none";

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change text content
    text.textContent = "sure I'm good!";

    // Modify CSS styles
    text.style.color = "blue";
    text.style.fontSize = "20px";

    // Add or remove the dynamic div
    if (dynamicDiv.style.display === "none") {
        dynamicDiv.style.display = "block"; // Show the div
    } else {
        dynamicDiv.style.display = "none"; // Hide the div
    }
});