var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 88
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 121
}

var personas = [sacha, alan, martin, dario, vicky, paula]

/*
var totalLibros = 0

for (var i = 0; i < personas.length; i++) {
  totalLibros = totalLibros + personas[i].cantidadDeLibros  
}
*/

// reduce necesita 2 cosas... la función y el valor inicial del acumulador

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros} libros`)