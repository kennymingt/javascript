---
layout: post
title:  Usando botones en JavaScript
date:   2018-03-22 16:00 +0800
categories: javascript principiante
---

* Mensajes de consola para depurar
* Constantes
* Añadir escuchas a eventos del DOM
* funciones


Vamos a mostrar un mensaje cuando pulsemos un botón.

Ponemos dos elementos con Id en el HTML, el botón y un div para mostrar el mensaje.

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

En nuestro archivo JavaScript tomamos una referencia a los elementos HTML
Luego añadimos una function al evento "click" del botón.

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
![alt buttons in javascript]({{ site.baseurl }}/images/2-buttons-in-javascript.png)
Muestra:
[http://javascript.kennyming.com/code/2-buttons-in-javascript/](http://javascript.kennyming.com/code/2-buttons-in-javascript/)

Codigo:
[https://github.com/kennymingt/javascript/tree/master/code/2-buttons-in-javascript](https://github.com/kennymingt/javascript/tree/master/code/2-buttons-in-javascript)
