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

function imprimirNombreMayusculas (persona) {
  // var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(javier)

// Reto nombre y edad

function imprimirNombreEdad (persona) {
  var {nombre, edad} = persona
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
imprimirNombreEdad(javier)
