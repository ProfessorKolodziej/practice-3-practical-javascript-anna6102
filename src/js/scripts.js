// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello from Anna")
const myName = "Anna";
let myAge = 100;

console.log(myAge);

//Practical JS
const toggleParagraph = document.querySelectior('.show');
console.log(toggledParagraph);


//Function
function toggleParagraph() {

    toggledParagraph.classList.toggle("show")
    toggledParagraph.classList.toggle("hide")
    console.log("my toggle function")
    console.log(toggledParagraph);
}

//Call the function to hide
toggleParagraph();

//Call the function to show
toggleParagraph();

//Find the button and toggle the paragraph
const toggleButton = document.querySelectior("#toggle-control");


toggleButton.addEventListener("click", toggleParagraph);