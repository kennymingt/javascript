/**
 * Using Buttons in Javascript demo app
 * Cómo usar botones en Javascript
 * 
 * Después de leer y enteder el código, intenta escribir la applicación desde cero, sin usar "copia y pega"
 */

console.log('Starting Application')

// Get a rerference to DOM elements: the div for the message, and the button
// Cogemos una referencia a los elementos html del documento ("DOM")
// El elemento div con id 'messageElement', y el elemento button con id 'myButton'
const messageElement = document.getElementById('messageElement')
const myButton = document.getElementById('myButton')

// Respond to click events
// Para responder a eventos 'click' del ratón
// Assignamos una función al evento 'click' del botón
myButton.addEventListener('click', function(){
    console.log('Button Clicked!')
    messageElement.textContent = 'ButtonClicked'
})