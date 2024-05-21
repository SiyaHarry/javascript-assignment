 //assignment.js

// This function will show a pop-up message introducing Siya and her goals to learn Javascript
function showSiyaIntroduction() {
    alert("Hello! My name is Siya! I am excited to learn Javascript at Nerahubs!\nMy goal is to become proficient in Javascript and build dynamic web applications, interactive client-side functionality, and engaging user experiences. Let's get started!");
}

// Call the function to show the pop-up message when the HTML document is loaded
window.onload = showSiyaIntroduction;
// alert ("Hello! My name is Siya! I am excited to learn Javascript at Nerahubs!
//  My goal is to become proficient in Javascript and build dynamic web applications, 
//  interactive client-side functionality, and engaging user experiences. Let's get started!")// Prompt the user for their name and age



// This is to show the name and age of a user
const name = prompt("Please enter your name:");
const age = parseInt(prompt("Please enter your age:"));

// Check the user's age and display appropriate messages
if (isNaN(age)) {
  alert("Invalid age entered. Please enter a valid number.");
} else {
  if (age >= 18) {
    alert("Welcome, " + name + "! Happy birthday!");
  } else {
    alert("Welcome, " + name + "!");
  }
}