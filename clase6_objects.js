var javier = {
  nombre: 'Javier',
  apellido: 'Curto',
  edad: 41
}

var loly = {
  nombre: 'Loly',
  apellido: 'Adamuz',
  edad: 47
}

function imprimirNombreMayusculas(persona) {
  // var nombre = persona.nombre.toUpperCase() 
  // podemos evitar crear una nueva variable colocando el valor en console.log directamente
  console.log(persona.nombre.toUpperCase())
}

// imprimirNombreMayusculas(javier.nombre)
// imprimirNombreMayusculas(loly.nombre)
imprimirNombreMayusculas(javier)
imprimirNombreMayusculas(loly)

// Llamamos directamente a la parte del objeto que nos interesa

function imprimirApellidoMayusculas( {apellido} ) {
  console.log(apellido.toUpperCase())
}
imprimirApellidoMayusculas(javier)
imprimirApellidoMayusculas(loly)
// Creando nuevos objetos y valores directamente en la llamada
imprimirApellidoMayusculas( {apellido: 'Fernandez'} )
