var nombre = 'Javier', apellido = 'Curto'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraNombre = nombre.charAt(0)
// length es un atributo y no lleva ()
var cantidadDeLetras = nombre.length

// Al ser variables si queremos ver nuevos datos hay que reasignar las variables

var nombreCompleto = nombre + ' ' + apellido

// Interpolación de texto con comillas invertidas `` $ y {}
// podemos pasarle métodos

var nombreInterpolado = `${nombre.toUpperCase()} ${apellido.toUpperCase()} `

// Sub String

var str = nombre.charAt(1) + nombre.charAt(2)
// substr(desde donde, hasta donde)
var subString = nombre.substr(1,4)

// RETO mostrar al usuario la ultima letra de su nombre

var ultimaLetra = nombre.charAt(cantidadDeLetras -1)
var ultimaLetra2 = nombre.substr(-1)

// J=0 A=1 V=2 I=3 E=4 R=5 son 6 caracteres pero empieza por el 0 por eso debemos restar 1 a length