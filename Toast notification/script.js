// Retrieve button elements from the DOM
const successBtn = document.getElementById("success");
const errorBtn = document.getElementById("error");
const invalidBtn = document.getElementById("invalid");

// Define toast messages for different scenarios
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!!';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error found, Please fix it!!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Check again!!';

// Function to display toast notification
const showToast = msg => {
  // Select the toast box container
  const toastBox = document.getElementById("toast-box");
  // Create a new div element for the toast
  const toast = document.createElement("div");
  // Add 'toast' class to the new div
  toast.classList.add("toast");
  // Set the inner HTML of the toast to the provided message
  toast.innerHTML = msg;
  // Append the toast to the toast box container
  toastBox.appendChild(toast);

  // Add specific styling for error messages
  if (msg.includes("Error")) {
    toast.classList.add("error");
  }

  // Add specific styling for invalid input messages
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  // Automatically remove the toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
};

// Event listeners for button clicks to trigger toast notifications
successBtn.addEventListener("click", () => {
  showToast(successMsg);
});

errorBtn.addEventListener("click", () => {
  showToast(errorMsg);
});

invalidBtn.addEventListener("click", () => {
  showToast(invalidMsg);
});
