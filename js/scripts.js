// Constants for query selectors
const studentIdParagraph = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

// Array of image file names (replace with your own image names)
const imageFiles = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Update with correct file extensions

// Function to change background color based on user input
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    let color;

    // Set background color based on user input
    if (userInput < 0 || userInput > 100) {
        color = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        color = "green";
    } else if (userInput > 20 && userInput <= 40) {
        color = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        color = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        color = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        color = "yellow";
    }

    // Apply background color and display student ID
    document.body.style.backgroundColor = color;
    studentIdParagraph.textContent = "Your Student ID: 200587199"; 
}

// Function to change background color using a random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    customNumberInput.value = randomNumber; // Set the random number in the input field
    changeCustomColor(); // Reuse the custom color function
}

// Function to generate options for the select list
function addList() {
    // Clear existing options (except the first one)
    while (imageSelect.options.length > 1) {
        imageSelect.remove(1);
    }

    // Add options for each image in the array
    imageFiles.forEach((image) => {
        const option = document.createElement("option");
        option.value = `img/${image}`; // Path to the image
        option.textContent = image; // Display name of the image
        imageSelect.appendChild(option);
    });
}

// Function to change the displayed image
function changeImage() {
    const selectedImage = imageSelect.value;
    imageElement.src = selectedImage; // Set the src attribute of the image element
}

// Event listeners
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Initialize the select list options when the page loads
addList();