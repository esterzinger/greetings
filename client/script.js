let num=0;
let result={}

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
    const typeSelect = document.getElementById("blessing-type");
    const selectedtype = typeSelect.options[typeSelect.selectedIndex].text;
    const atmSelect = document.getElementById("atmosphere");
    const selectedatm = atmSelect.options[atmSelect.selectedIndex].text;
    selectedOptions.push(`Event: ${selectedEvent}`);
    selectedOptions.push(`Event: ${selectedtype}`);
    selectedOptions.push(`Event: ${selectedatm}`);


    // Add other selected options based on the additional inputs
    const ageInput = document.getElementById("age");
    if (ageInput) {
        const age = ageInput.value;
        selectedOptions.push(`Age: ${age}`);
    }

    return selectedOptions;
}

// // Initial setup - handle initial event change
handleEventChange();

async function sendReq(){
 // Your logic to send a request to the server and update the greetingOutput goes here
 const event = document.getElementById("event").options[document.getElementById("event").selectedIndex].text;
 const type = document.getElementById("blessing-type").options[document.getElementById("blessing-type").selectedIndex].text;
 const age = document.getElementById("age")
 const atmosphere = document.getElementById("atmosphere").options[document.getElementById("atmosphere").selectedIndex].text;

  const response =
 await fetch('http://localhost:3000/generate-greeting', {
     method: 'POST', 
     headers: {
       'Content-Type': 'application/json', 
     },
     body: JSON.stringify({ "event": event, "age": age, "type": type, "atmosphere": atmosphere }),
   });
   if (response.ok) {

     result = await response.json();
    } else {
        console.error('Error fetching options');
      }
}


async function generateGreeting() {
    const selectedOptions = getSelectedOptions();
    num=1;
    await sendReq();
    let greete=result[1];      
    document.getElementById("greetingOutput").innerText = greete;
    displaySelectedOptions(selectedOptions);
    document.getElementById("inputs").style.display = "none";
    document.getElementById("generateGreetingBtn").style.display = "none";
    document.getElementById("selectedOptions").style.display = "block";
    document.getElementById("greetingOutput").style.display = "block";
    document.getElementById("changeOptionsBtn").style.display = "block";
    document.getElementById("getDiffrentGreete").style.display = "block";
    document.getElementById("changeOptionsBtn").style.display = "block";
    document.getElementById("getDiffrentGreete").style.display = "block";
    //document.getElementById("inputs").style.display = "none";

}

async function getDiffrentGreete(){
    const selectedOptions = getSelectedOptions();
    num++;
   let greete;
console.log(num%3)
   switch (num%3) {
    case 1:
        await sendReq();
        greete=result[1];
        break;
    case 2:
        greete=result[2];
        break;
    case 0:    
        greete=result[3];
        break;
  }  
    document.getElementById("greetingOutput").innerText = greete;
    displaySelectedOptions(selectedOptions);
    document.getElementById("inputs").style.display = "none";
    document.getElementById("generateGreetingBtn").style.display = "none";
    document.getElementById("selectedOptions").style.display = "block";
    document.getElementById("greetingOutput").style.display = "block";
    document.getElementById("changeOptionsBtn").style.display = "block";
    document.getElementById("getDiffrentGreete").style.display = "block";
}

// Function to change the greeting options
function changeOptions() {
    // Your logic to reset the page and allow changing options goes here
    document.getElementById("inputs").style.display = "block";
    document.getElementById("generateGreetingBtn").style.display = "block";
    document.getElementById("selectedOptions").style.display = "none";
    document.getElementById("greetingOutput").style.display = "none";
    document.getElementById("changeOptionsBtn").style.display = "none";
    document.getElementById("getDiffrentGreete").style.display = "none";

    handleEventChange(); // Reset additional inputs
}

