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

function cumple2(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

cumple2(javier)
