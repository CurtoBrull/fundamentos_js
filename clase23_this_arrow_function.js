function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// Las arrow function cambian el this dentro de la función
// this apunta al this fuera de la función (global = window)

/*
Persona.prototype.saludar = () => {
  // nos indica que this.nombre y this.apellido es window
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
  debugger // nos indica que this.altura es window
  return this.altura >= 1.8
}
*/

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  return this.altura >= 1.8
}

var javier = new Persona('Javier', 'Curto', 1.86)
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Martinez', 1.83)
var izhan = new Persona('Izhan', 'Curto', 1.53)