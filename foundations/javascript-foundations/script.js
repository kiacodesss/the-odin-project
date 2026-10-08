/*
// Function: Print phrases, names, and ages
console.log("Hello, World!");

let firstName = "John";
let lastName = "Doe";

console.log(firstName);
console.log(lastName);

let age = 11;
console.log(age);

age = 54;

console.log(age);

// Note: This will show an error
const pi = 3.14;
pi = 10;

console.log(pi);

// First Assignment :P - Practice printing of multiple equations
// Important Note: Javascript runs equations using the PEMDAS rule
console.log(23 + 97)
console.log(14 + 17 + 19 + 21 + 24 + 25)
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a)

a = 20;
console.log(a);

let b = 7 * a;
console.log(b)

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);


// Function: When button is clicked, it shows a dialog box at the top to enter a new name and updates the button
function updateName() {
  const name = prompt("Enter a new name:");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");
button.addEventListener("click", updateName);
*/

// Function: Creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.


const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
*/



// --- BUTTON 1: Update Name ---
const nameButton = document.querySelector("#name-btn");

function updateName() {
  const name = prompt("Enter a new name:");
  // Only update if the user typed something and didn't cancel
  if (name) {
    nameButton.textContent = `Player 1: ${name}`;
  }
}

nameButton.addEventListener("click", updateName);


// --- BUTTON 2: Create Paragraph ---
const paraButton = document.querySelector("#para-btn");

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

paraButton.addEventListener("click", createParagraph);