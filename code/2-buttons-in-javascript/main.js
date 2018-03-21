/**
 * Using Buttons in Javascript demo app
 */

console.log('Starting Application')

// Get a rerference to DOM elements: the div for the message, and the button
const messageElement = document.getElementById('messageElement')
const myButton = document.getElementById('myButton')

// Respond to click events
myButton.addEventListener('click', function(){
    console.log('Button Clicked!')
    messageElement.textContent = 'ButtonClicked'
})