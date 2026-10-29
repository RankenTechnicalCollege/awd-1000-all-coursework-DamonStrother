/*
    Author: Damon Strother
    Date: 10/19/2026
    File Name: script.js
*/

// Function to display content
function content() {
  var text = document.getElementById("new");
  text.textContent = "Hi. I am a new paragraph that was created with a JavaScript function.";
  text.style.color = "#c0145f";
  text.style.fontSize = "1.4em";
}

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("contentButton");
  button.addEventListener("click", content);
});