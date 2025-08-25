//your JS code here. If required.
// Function to create a delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the button click
async function handleClick() {
  // Get input values
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);

  // Wait for the specified delay
  await wait(delay);

  // Display the message in the output div
  document.getElementById("output").innerText = text;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", handleClick);
