const notesContainer = document.querySelector(".notes-container");
const btn = document.getElementById("btn");
const notes = document.querySelectorAll(".input-box");

function updateNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let delImg = document.createElement("img");
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");
  delImg.src = "img/del.png";
  delImg.classList.add("del-img");
  notesContainer.appendChild(inputBox).appendChild(delImg);
});

notesContainer.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateNotes();
  }
});
