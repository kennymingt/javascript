---
layout: post
title:  Calculadora simple 1
---
![alt buttons in javascript]({{ site.baseurl }}/images/5-calculadora-simple.JPG)
archivo: index.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculadora Simple</title>
</head>
<body>
    <!-- Un poco de html -->
    <!-- Esto es un comentario y no aparece en el navegador -->
    <!-- 
        El elemento html h1 es un partado. Cualquier cosa despues de un element h1 aparece en una nueva linea.
        Este tipo d elementos se llaman de bloque, "block"
    -->
    <!--
        El elemento input no es de bloque,
        con lo cual aparece en la misma linea que el resto del texto.
        Este tipo de elementos html se les llaman "en linea", "in-line"
    -->
    
    <!-- 
        El elemento div es de bloque,
        aqui lo usamos para que cada entrada de texto en una linea y colocar los botones tambien en su propia linea
    -->
    <!--
        El elemento "button" es en linea, in-line
    -->

    <h1>Calculadora Simple</h1>
    <div>
        Introduce el primer número: <input type="number" id="numero1">
    </div>
    <div>
        Introduce el segundo número: <input type="number" id="numero2">
    </div>

    <!-- El elemento div crea un apartado -->
    <div>
        <button id='suma'>Suma</button>
        <button id='resta'>Resta</button>
        <button id='multiplica'>Multiplica</button>
        <button id='divide'>Divide</button>
    </div>
    <div id="resultado"></div>
    
    <script src="main.js"></script>
    
</body>
</html>
~~~
archivo: main.js
~~~
/**
 * Applicación calculadora simple 2.
 * 
 * Ya nuestro progrmas empiezan a ser largos
 * 
 * Después de leer y enteder el código, intenta escribir la applicación desde cero, sin usar "copia y pega"
 */

console.log('Arrancando la app')


// Cogemos una referencia a los elemetos del documento html, DOM
// Las dos entradas de texto, y la sección para mostrar el resultado
const entradaTexto1 = document.getElementById('numero1')
const entradaTexto2 = document.getElementById('numero2')
const elementoResultado = document.getElementById('resultado')


// Y los 4 botones
const botonSuma =document.getElementById('suma')
const botonResta =document.getElementById('resta')
const botonMultiplica =document.getElementById('multiplica')
const botonDivide =document.getElementById('divide')

// Assignamos una función al evento 'click' de cada boton.
// En esta ocasión assignamos una función que definimos separadamente.
// Vuelve al ejemplo anterior para ver la diferencia
botonSuma.addEventListener('click', suma)
botonResta.addEventListener('click', resta)
botonMultiplica.addEventListener('click', multiplica)
botonDivide.addEventListener('click', divide)


// Creamos cada una de las funciones para realizar la operación correspondiente
function suma(){
    // parseInt convierte de texto(String) a numero(Number)
    const valor1 = parseInt(entradaTexto1.value)
    const valor2 = parseInt(entradaTexto2.value)

    // Calculamos el resultado, suma +
    const resultado = valor1 + valor2

    // Mostramos el resultado en la pantalla
    elementoResultado.textContent = 'El resultado es: ' + resultado
}

function resta(){
    // parseInt convierte de texto(String) a numero(Number)
    const valor1 = parseInt(entradaTexto1.value)
    const valor2 = parseInt(entradaTexto2.value)

    // Calculamos el resultado, resta -
    const resultado = valor1 - valor2

    // Mostramos el resultado en la pantalla
    elementoResultado.textContent = 'El resultado es: ' + resultado
}

function multiplica(){
    // parseInt convierte de texto(String) a numero(Number)
    const valor1 = parseInt(entradaTexto1.value)
    const valor2 = parseInt(entradaTexto2.value)

    // Calculamos el resultado, multiplicación *
    const resultado = valor1 * valor2

    // Mostramos el resultado en la pantalla
    elementoResultado.textContent = 'El resultado es: ' + resultado
}

function divide(){
    // parseInt convierte de texto(String) a numero(Number)
    const valor1 = parseInt(entradaTexto1.value)
    const valor2 = parseInt(entradaTexto2.value)

    // Calculamos el resultado, devisión /
    const resultado = valor1 / valor2

    // Mostramos el resultado en la pantalla
    elementoResultado.textContent = 'El resultado es: ' + resultado
}
~~~

Ejemplo:
[http://javascript.kennyming.com/code/4-calculadora-simple-2/](http://javascript.kennyming.com/code/4-calculadora-simple-2/)

Codigo:
[https://github.com/kennymingt/javascript/tree/master/code/4-calculadora-simple-2](https://github.com/kennymingt/javascript/tree/master/code/4-calculadora-simple-2)