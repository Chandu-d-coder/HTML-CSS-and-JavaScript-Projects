// Get the button element by its ID
const button = document.getElementById("button");
// Get the OTP field element by its ID
const otpField = document.getElementById("otp-field");

// Add an event listener to the button for generating OTP
button.addEventListener("click", () => {
  // Initialize an empty string to store the generated OTP
  let otp = "";

  // Generate a 6-digit OTP
  let i = 1;
  while (i < 7) {
    // Append a random digit (0-9) to the OTP string
    otp += Math.floor(Math.random() * 10);
    i++;
  }

  // Log the generated OTP to the console
  console.log(otp);
  // Display the generated OTP in the OTP field
  otpField.innerText = otp;

  // Clear the OTP field after 5 seconds
  setTimeout(() => {
    otpField.innerText = "";
  }, 5000);
});
