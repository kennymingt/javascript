---
layout: post
title:  Input text in Javascript
---
* HTML input tag
* Get Input value
* Concat strings

We are displaying an input box for the user to input their name.
When clicking a button we display the name in a HTML element.

file: index.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Input Text in Javascript</title>
</head>
<body>
    <h1>Input Text Application</h1>
    Input your name: 
    <input id="name" type="text" >
    <button id="myButton">Press Me</button>
    <div id="message"></div>
    
    <script src="main.js"></script>
</body>
</html>
~~~
file: main.js
~~~
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
~~~

Sample:
[http://javascript.kennyming.com/code/3-input-text-javascript/](http://javascript.kennyming.com/code/3-input-text-javascript/)

Code:
[https://github.com/kennymingt/javascript/tree/master/code/3-input-text-javascript](https://github.com/kennymingt/javascript/tree/master/code/3-input-text-javascript)