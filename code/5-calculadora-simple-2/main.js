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