class Persona {
  constructor (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  // fn = si se introduce una funcion es true
  saludar (fn) {
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }
  soyAlto () {
    return this.altura >= 1.8
  }
}

class Desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar (fn) {
    // ponemos this ya que los valores no estan en esta parte de la funcion
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador`)
    if (fn) {      
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buenos días ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`No sabía que eras Desarrollador`);
  }else {
    console.log(`Ya sabía yo que no eras Desarrollador`);
  }
}

var javier = new Persona('Javier', 'Curto', 1.86)
var loly = new Desarrollador ('Loly', 'Adamuz', 1.75)
var marta = new Persona ('Marta', 'Pringue', 1.75)

javier.saludar(responderSaludo)
loly.saludar(responderSaludo)
marta.saludar()