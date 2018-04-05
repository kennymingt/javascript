---
layout: post
title:  Entrada de texto en Javascript
---
* Campo o casilla de entrada de texto en HTML (input tag)
* Leer el valor del campo de entrada de texto
* Encadenar cadenas de texto

Vamos a mostrar un campo de entrada de texto para que el usuario introduzca su nombre.
Cuando pusemos sobre el botón mostraremos un mensaje con el nombre en un elemento html.

archivo: index.html
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

archivo: main.js
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

Ejemplo:
[http://javascript.kennyming.com/code/3-input-text-javascript/](http://javascript.kennyming.com/code/3-input-text-javascript/)

Codigo:
[https://github.com/kennymingt/javascript/tree/master/code/3-input-text-javascript](https://github.com/kennymingt/javascript/tree/master/code/3-input-text-javascript)