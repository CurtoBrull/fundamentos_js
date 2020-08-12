var edad = 27

edad += 1 // Es lo mismo que edad = edad + 1

var peso = 75

peso -= 2 // Lo mismo que peso = peso - 2

var sandwich = 1

peso += sandwich // Lo mismo que peso = peso + sandwich

var jugarFutbol = 3

peso -= jugarFutbol // Lo mismo que peso = peso + jugarFutbol

var precioVino = 200.3

var total = precioVino * 3 // nos da 600.9000000000001

// Para evitar este problema podemos multiplicar por 100 y dividir por 100
var total2 = precioVino * 100 * 3 /100

// Redondear

var total3 = Math.round(precioVino * 100 * 3) / 100

// Indicar decimales a mostrar
var totalStr = total.toFixed(3) // Es un string

var totalParseFloat = parseFloat(totalStr) // pasamos el string anterior a numero Flotante

var pizza = 8
var personas = 2
var cantidadPorciones = pizza / personas
