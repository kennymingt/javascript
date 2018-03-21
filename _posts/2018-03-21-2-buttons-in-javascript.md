file: index.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Buttons in JavaScript</title>
</head>
<body>
    <h1>Using Buttons App</h1>
    <div id="messageElement"></div>
    <button id="myButton">Press Me</button>
    <script src="main.js"></script>
</body>
</html>
~~~

file: main.js
~~~
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
~~~