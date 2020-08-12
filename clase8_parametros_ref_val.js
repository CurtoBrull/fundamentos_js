var javier = {
  nombre: 'Javier',
  apellidos: 'Curto',
  edad: 41
}

function cumple(persona) {
  persona.edad += 1
}
// Va incrementando el valor cada vez
cumple(javier)

// Si pasamos edad como valor el objeto no se modifica
function cumple2(edad) {
  edad += 1
}

function cumple3(persona) {
  return {
    ...persona, // aquí copiamos el objeto nombrado 'Spread Operator'
    edad: persona.edad + 1
  }
}

cumple3(javier)

var JavierMasViejo = cumple3(javier)
