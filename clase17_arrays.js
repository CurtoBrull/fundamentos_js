var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

// acceder a objetos

// personas[0]

// personas[1].altura

// persona[2]['altura']

// desde [0]; mientras [esto] sea menor a la longitud del array, suma 1
for (let i = 0; i < personas.length; i++) {
  // persona es igual a poner: personas[el que toque]
  var persona = personas[i]
  console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}m.`);  
}