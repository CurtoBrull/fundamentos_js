// Si hacemos referencia a una variable global dentro de una funcion podemos modificar su valor. Esto se llama "Side Effect"

var nombre = 'Javier'

function imprimirNombre() {
  nombre = nombre.toUpperCase()  
  console.log(nombre)
}

imprimirNombre()

// Mejorar la funcion eliminando el side effect declarando la variable en local

function imprimirNombreMayusculas(nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreMayusculas(nombre)
