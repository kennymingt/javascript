/**
 * Simulador de hipotecas.
 * 
 * 
 * Nota:
 * Esto es sólo una applicación ejemplo para ilustrar codigo en Javascript.
 * Seguramente los resultados no coincidan con los pagos reales del banco.
 * Consulta con tu banco antes de pedir una hipoteca y asegurate de que puedes pagarla.
 * 
 * 
 * Después de leer y enteder el código, intenta escribir la applicación desde cero, sin usar "copia y pega"
 */


/*
Nuestra pequeña applicación de simular hipotecas toma la siguiente información por parte del usuario:
    * Importe total del prestamo
    * El interés anual (para simplificar suponemos que el interes no varia)
    * El número de meses en los que queremos pagar la hipoteca

Para calcular la cuota usamos una formaula que hemos encontrado en internet:


                     importe
    cuota =    _______________________
                                 -meses            
                1 - (1 + interés)
                _________________
                    interés

    
    O como lo escribiriamos en el ordenador:
    cuota = importe del préstamo / ( (1 - ( 1 + tipo interés)) ^ -número de meses ) / tipo de interés)

    El interés se calcula tomando el interés anual y dividiendo entre 12 meses

Una vez tenemos la cuota mostramos al usuario lo que paga cada mes, y el total pagado una vez que termine la hipoteca

Operadores aritmeticos en JS
        suma            +
        resta           -
        multiplicación  *
        división        /
        Exponencial     **

*/



// Vamos a ello
// Para tomar valores y colocar valores en el navegador tomamos referencias a los elementos html que necesitamos

// Entradas de texto
const elementoImporte = document.getElementById('importe')
const elementoInteres = document.getElementById('interes')
const elementoMeses = document.getElementById('meses')

// Elementos para mostrar info
const elementoCuota = document.getElementById('cuota')
const elementoPagado = document.getElementById('pagado')
const elementoInteresesPagados = document.getElementById('interesesPagados')

// El botón
const botonCalcular = document.getElementById('calcular')


// Asignamos la función calcular al click del raton en el botón
botonCalcular.addEventListener('click', calcular)


// Creamos la funcion calcular hipoteca
function calcular(){
    // Asumimos que esta función solo se ejecuta una vez están todos los campos rellenos correctamente
    // y el usuario pulsa el botón calcular

    // Tomamos los valores introducdos por el usuario y los convertimos a números
    // ParseFloat convierte de cadena de texto a número con decimales
    const importe = parseInt(elementoImporte.value)
    const interesAnual = parseFloat(elementoInteres.value)
    const meses = parseInt(elementoMeses.value)

    // Comenzamos los calculos

    // El interes anual vienen dado en %, asi que dividimos por 100
    // Ademas lo divimos por los 12 mese para tener el interes por cuota
    const interes = (interesAnual/100) /12



    // Calculamos la cuota mensual

    const cuota = importe / (( (1 - ( 1 + interes) ** -meses)) / interes)
    // Nota en Javascript (ECMAScript 2016) ** eleva a la potencia de
    // ejemplo:
    //  dos al cuadrado , 2 ** 2
    // 5 elevado a la décima potencia, 5 ** 10


    // Calculamos el total pagado
    // Esto es la cuota por el número de meses
    const pagado = cuota * meses

    // Intereses pagados al final de al hipoteca, que alegría
    // Esto es el total pagado menos lo que habíamos pedido de préstamo (el importe)
    const interesesPagados = pagado - importe



    // Ahora ya podemos mostrarlo todo al usuario
    // tofixed() limita el numero de decimales, en nuestro case 2 decimales
    elementoCuota.textContent = cuota.toFixed(2)
    elementoPagado.textContent = pagado.toFixed(2)
    elementoInteresesPagados.textContent = interesesPagados.toFixed(2)

}