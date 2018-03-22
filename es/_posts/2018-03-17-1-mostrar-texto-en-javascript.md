---
layout: page
title: Cómo mostrar un texto usando javascript
permalink: /1-mostrar-texto-en-javascript/
---

Lo que vamos a ver:
* Crear un archivo HTML básico
* Ponerle título a la página
* Mostrar un texto estático como cabecero "h1"
* Incluir el archivo JavaScript en nuestro HTML
* Tomar una referencia a un elemento HTML y cambiar su contenido de texto.

Este es el HTML de la applicación.
Usaremos un "div" para mostrar un mensaje al usuario.
Para ello necesitamos ponerle un nombre al campode identificacióm "id" en el HTML.
A través del "id" podemos coger una referencia a este elemento desde nuestro archivo javascript.
Por último incluimos el archivo javascript, llamado "main.js"
Archivo: index.html
~~~
<!doctype html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>Applicación: Mostrar información</title>
 </head>
 <body>
  <h1>Mostrar Información</h1>
  <div id="info"></div>
  <script src="main.js"></script>
 </body>
</html>
~~~
Archivo: main.js
~~~
/**
* Applicación principal
* */
const info = document.getElementById('info')
info.textContent('Hola mundo!")
~~~

Eso es todo.
Si abrimos el archivo index.html en chrome, simplemente haz doble-click, veremos nuestro mensage "Hola mundo!" mostrado en la página web.

Ejemplo:
[http://javascript.kennyming.com/code/1-displaying-text/](http://javascript.kennyming.com/code/1-displaying-text/)

Codigo:
[https://github.com/kennymingt/javascriptkenny/tree/master/code/1-displaying-text](https://github.com/kennymingt/javascriptkenny/tree/master/code/1-displaying-text)
