// Selecting DOM elements
const containerBg = document.querySelector(".container");
const violet = document.querySelector(".violet");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const random = document.querySelector(".random");
const body = document.querySelector(".body");
const buttons = document.querySelectorAll(".btn");

// Setting initial styles for the random button
random.style.backgroundColor = "white";
random.style.border = "4px solid rgba(128, 128, 128, 0.279)";
random.style.color = "gray";

// Adding event listeners to all buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Resetting background colors
    containerBg.style.backgroundColor = "";
    body.style.backgroundColor = "";
    random.style.backgroundColor = "";

    // Applying different colors based on button clicked
    if (btn.classList.contains("violet")) {
      containerBg.style.backgroundColor = "white";
      body.style.backgroundColor = "violet";
    } else if (btn.classList.contains("blue")) {
      containerBg.style.backgroundColor = "white";
      body.style.backgroundColor = "blue";
    } else if (btn.classList.contains("green")) {
      containerBg.style.backgroundColor = "white";
      body.style.backgroundColor = "green";
    } else if (btn.classList.contains("red")) {
      containerBg.style.backgroundColor = "white";
      body.style.backgroundColor = "red";
    } else if (btn.classList.contains("random")) {
      // Generating random color
      const red = Math.round(Math.random() * 255);
      const green = Math.round(Math.random() * 255);
      const blue = Math.round(Math.random() * 255);
      const randomClr = `rgb(${red},${green},${blue})`;

      // Applying random color to body and random button
      body.style.backgroundColor = randomClr;
      random.style.backgroundColor = randomClr;
      random.style.color = "white";
      containerBg.style.backgroundColor = "white";
    } else {
      // Reset button clicked, resetting styles
      containerBg.style.backgroundColor = "";
      body.style.backgroundColor = "";
      random.style.backgroundColor = "white";
      random.style.border = "4px solid rgba(128, 128, 128, 0.279)";
      random.style.color = "gray";
    }
  });
});
