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
var randomButton = document.querySelector("#random");

// Functions - DRY (Do Not Repeat Yourself)
function setGradient() {
    // If we want to change the background ideally we need to change the body.background property.
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    // Now we need to show the CSS in our h3 tag
    css.textContent = body.style.background + ";";
}

function setupOnPageLoad() {
    // Make color inputs match the background on pageload.
    color1.value = "#ff0000";
    color2.value = "#0000ff";
    // Displaying initial CSS linear gradient property on pageload.
    setGradient();
}

function setRandomColors() {

    // Created my own Hex Generator w/ the help of a friend
    function getHexSegment () {
        // Each segment is 0-255 encoded in hex, or 00 - ff
        // https://www.w3schools.com/js/js_random.asp
        var hexValue = Math.floor(Math.random() * 256).toString(16);
        // Add the hexValue with a leading '0' to get "a" to "0a"
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
        var newHex = hexValue.padStart(2, '0');
        console.log(newHex);
        return newHex;
    }
    // Set the Colors
    color1.value = "#" + getHexSegment() + getHexSegment() + getHexSegment();
    color2.value = "#" + getHexSegment() + getHexSegment() + getHexSegment();
    setGradient();
}

// We want to listen to events in order to listen to the user's actions
// There is a useful event for inputs called "input"
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// Added a event listener to the window object on pageload.
window.addEventListener("load", setupOnPageLoad);
// Add an event listener for randomButton click
randomButton.addEventListener("click", setRandomColors);
