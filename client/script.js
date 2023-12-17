// Function to dynamically add inputs based on the selected event
function handleEventChange() {
    const eventSelect = document.getElementById("event");
    const selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;

    // Your logic to add additional inputs based on the selected event goes here
    // For example, show age input for the birthday event
    const additionalInputsContainer = document.getElementById("additional-inputs");
    additionalInputsContainer.innerHTML = "";

    if (selectedEvent === "birthday") {
        const ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.placeholder = "Enter age";
        ageInput.id = "age";
        additionalInputsContainer.appendChild(ageInput);
    }
    // Add more conditions for other events as needed
}

// Function to generate a greeting using server request
function generateGreeting() {
    // Your logic to send a request to the server and update the greetingOutput goes here
    const selectedOptions = getSelectedOptions();
    const generatedGreeting = "Hello, this is a generated greeting!";
    document.getElementById("greetingOutput").innerText = generatedGreeting;

    // Display selected options at the top of the screen
    displaySelectedOptions(selectedOptions);
}

// Function to change the greeting options
function changeOptions() {
    // Your logic to reset the page and allow changing options goes here
    document.getElementById("greetingOutput").innerText = "";
    document.getElementById("selectedOptions").innerHTML = "";
    handleEventChange(); // Reset additional inputs
}

// Function to display selected options at the top of the screen
function displaySelectedOptions(options) {
    const selectedOptionsContainer = document.getElementById("selectedOptions");
    selectedOptionsContainer.innerHTML = "<p>Selected Options:</p><ul>";

    options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = changeOptions; // Clicking on the option goes back to the first page
        selectedOptionsContainer.querySelector("ul").appendChild(li);
    });

    selectedOptionsContainer.innerHTML += "</ul>";
}

// Function to get currently selected options
function getSelectedOptions() {
    const selectedOptions = [];
    const eventSelect = document.getElementById("event");
    const selectedEvent = eventSelect.options[eventSelect.selectedIndex].text;
    selectedOptions.push(`Event: ${selectedEvent}`);

    // Add other selected options based on the additional inputs
    const ageInput = document.getElementById("age");
    if (ageInput) {
        const age = ageInput.value;
        selectedOptions.push(`Age: ${age}`);
    }

    // Add more conditions for other additional inputs as needed

    return selectedOptions;
}

// Initial setup - handle initial event change
handleEventChange();

// Function to dynamically add inputs based on the selected event
function handleEventChange() {
    const eventSelect = document.getElementById("event");
    const selectedEvent = eventSelect.options[eventSelect.selectedIndex].value;

    // Your logic to add additional inputs based on the selected event goes here
    const additionalInputsContainer = document.getElementById("additional-inputs");
    additionalInputsContainer.innerHTML = "";

    if (selectedEvent === "birthday") {
        const ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.placeholder = "Enter age";
        ageInput.id = "age";
        additionalInputsContainer.appendChild(ageInput);
    }
    // Add more conditions for other events as needed
}


function generateGreeting() {
    // Your logic to send a request to the server and update the greetingOutput goes here
    const selectedOptions = getSelectedOptions();
    const generatedGreeting = "Hello, this is a generated greeting!"; // Replace with actual server request
    document.getElementById("greetingOutput").innerText = generatedGreeting;

    // Display selected options at the top of the screen
    displaySelectedOptions(selectedOptions);

    // Hide the inputs container and show the generated greeting
    document.getElementById("inputs-container").style.display = "none";
    document.getElementById("generateGreetingBtn").style.display = "none";
    document.getElementById("selectedOptions").style.display = "block";
    document.getElementById("greetingOutput").style.display = "block";
    document.getElementById("changeOptionsBtn").style.display = "block";
}

// Function to change the greeting options
function changeOptions() {
    // Your logic to reset the page and allow changing options goes here
    document.getElementById("inputs-container").style.display = "block";
    document.getElementById("generateGreetingBtn").style.display = "block";
    document.getElementById("selectedOptions").style.display = "none";
    document.getElementById("greetingOutput").style.display = "none";
    document.getElementById("changeOptionsBtn").style.display = "none";
    handleEventChange(); // Reset additional inputs
}