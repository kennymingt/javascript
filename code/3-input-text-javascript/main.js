/**
 * This application shows how to read the value from an input field.
 */

console.log('Starting App')

// Get a reference of the DOM elements
const nameInput = document.getElementById('name')
const button = document.getElementById('myButton')
const messageElement = document.getElementById('message')

// When the button is click it will execute a function.
// This function gets the value of the name input and displays it in the message div element.
button.addEventListener('click', function(){
    const name =nameInput.value
    messageElement.textContent = 'Hello ' + name
})
