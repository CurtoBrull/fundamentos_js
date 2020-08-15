function Persona(nombre, apellido, altura) {
  // this hace referencia al objeto construido
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
/*
Persona.prototype.soyAlto = function () {
  if (this.altura >= 1.8) {
    console.log(`Mido ${this.altura}m, soy alto.`)
  } else {
    console.log(`No soy alto, solo mido ${this.altura}m.`);
  }
}
*/

// Usando ternario para simplificar lo anterior

Persona.prototype.soyAlto = function () {
  console.log(`${this.altura >= 1.8 ? `Mido ${this.altura}m, soy alto.` : `No soy alto, solo mido ${this.altura}m.`}`)
}


// new crea un nuevo objeto y se le asigna como prototipo lo que le asignemos (Persona)

var javier = new Persona('Javier', 'Curto', 1.86)
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Martinez', 1.83)
var izhan = new Persona('Izhan', 'Curto', 1.53)

