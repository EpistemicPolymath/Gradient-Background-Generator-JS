/*
  Project Goals

  1. To read the values of our two color inputs.
  2. To print out the CSS gradient code - linear-gradient(to right, red, yellow; - that includes those colors. So we can easily copy/paste.
  3. To update the actual background gradient to match the selected color values.

  Additional Goals

  1. Write code so that the colour inputs match the background generated on the first page load.

  2. Display the initial CSS linear gradient property on page load.

  3. BONUS: Add a random button which generates two random numbers for the colour inputs.

*/

// Variables
var css = document.querySelector("#style-output");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient-background");

// Functions - DRY (Do Not Repeat Yourself)
function setGradient() {
    // If we want to change the background ideally we need to change the body.background property.
    // Goal 3
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    // Now we need to show the CSS in our h3 tag
    // Goal 2
    css.textContent = body.style.background + ";";
}

function setColorInputsOnPageLoad() {
    color1.value = "#ff0000";
    color2.value = "#FFFF00";
}

// We want to listen to events in order to listen to the user's actions
// There is a useful event for inputs called "input"
// Goal 1
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// Make color inputs match the background on pageload.
window.addEventListener("load", setColorInputsOnPageLoad);
