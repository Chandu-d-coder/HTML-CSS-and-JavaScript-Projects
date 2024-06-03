// Get references to the eye icon and password input box
const openEyeIcon = document.getElementById("eye-open");
const passBox = document.getElementById("password");

// Event listener to toggle password visibility
openEyeIcon.addEventListener("click", () => {
  // Check if password box exists or if it's empty
  if (!passBox || passBox.value == "") {
    // Display an alert if password box is empty
    alert("Please enter your password first");
  } else if (passBox.type == "password") {
    // Change input type to text and toggle eye icon class to show the eye
    passBox.type = "text";
    openEyeIcon.classList.add("fa-eye");
    openEyeIcon.classList.remove("fa-eye-slash");
  } else {
    // Change input type to password and toggle eye icon class to hide the eye
    openEyeIcon.classList.add("fa-eye-slash");
    openEyeIcon.classList.remove("fa-eye");
    passBox.type = "password";
  }
});
