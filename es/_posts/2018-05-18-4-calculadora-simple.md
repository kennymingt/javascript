---
layout: post
title:  Calculadora simple 1
---
archivo: index.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculadora Simple 1</title>
</head>
<body>

    <!-- Esto es un comentario y no aparece en el navegador -->
    
    <h1>Calculadora Simple 1</h1>
    <div>
        Introduce el primer número: <input type="number" id="numero1">
    </div>
    <div>
        Introduce el segundo número: <input type="number" id="numero2">
    </div>

    <!-- El elemento div crea un apartado -->
    <div>
        <button id='suma'>Suma</button>
    </div>

    <div id="resultado"></div>
    
    <script src="main.js"></script>
    
</body>
</html>
~~~
archivo: main.js
~~~
/**
 * Applicación calculadora simple 1.
 * 
 * Después de leer y enteder el código, intenta escribir la applicación desde cero, sin usar "copia y pega"
 */

console.log('Arrancando la app')


// Cogemos una referencia a los elemetos del documento html, DOM
// Las dos entradas de texto, y la sección para mostrar el resultado
const entradaTexto1 = document.getElementById('numero1')
const entradaTexto2 = document.getElementById('numero2')
const elementoResultado = document.getElementById('resultado')

// Y al boton
const botonSuma =document.getElementById('suma')


// Assignamos una función al evento 'click' 
botonSuma.addEventListener('click', function() {

    // parseInt convierte de texto(String) a numero(Number)
    const valor1 = parseInt(entradaTexto1.value)
    const valor2 = parseInt(entradaTexto2.value)

    // Llamamos a la función suma, que creamos más abajo
    // Guardamos el valor que devuelve en la variable resultado
    const resultado = suma(valor1, valor2)

    // Mostramos el resultado en la pantalla
    elementoResultado.textContent = 'El resultado es: ' + resultado


})


// Creamos una función llamada suma
// esta funcion toma dos valores a y b
// Suma a y b, y devuelve el resultado
function suma(a, b){
    return a + b
}
~~~

Ejemplo:
[http://javascript.kennyming.com/code/4-calculadora-simple-1/](http://javascript.kennyming.com/code/4-calculadora-simple-1/)

Codigo:
[https://github.com/kennymingt/javascript/tree/master/code/4-calculadora-simple-1](https://github.com/kennymingt/javascript/tree/master/code/4-calculadora-simple-1)