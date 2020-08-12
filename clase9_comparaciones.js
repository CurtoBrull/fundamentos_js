var x = 4, y = "4"

x == y // true
x === y // false

var javier = {
  nombre: 'Javier'
}
var otraPersona = {
  nombre: 'Javier'
}
javier == otraPersona // false son objetos diferentes
javier === otraPersona // false

// True igualando variables igualando objetos

otraPersona = javier

// La comparación seguiría dando false ya que estamos creando un nuevo objeto
var anotherPerson = {
  ...javier
}