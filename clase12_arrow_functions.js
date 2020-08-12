var javier = {
  nombre: 'Javier',
  apellido: 'Curto',
  edad: 41,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
}

var izhan = {
  nombre: 'Izhan',
  edad: 12,
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero /* === true */ ) {
    console.log('Ingeniero')
  } else{
    console.log('No es ingeniero');
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  }
  if (persona.cantante) {
    console.log('Cantante');
  }
  if (persona.dj) {
    console.log('dj');
  }
  if (persona.guitarrista) {
    console.log('Guitarrista');
  }
  if (persona.drone) {
    console.log('Piloto de Drones');
  }
}

const MAYORIA_EDAD = 18

// variable con una funcion asignada
// function podemos cambiarlo por la => y si solo tiene 1 parámetro podemos ponerlo sin los ()

/* 
const esMayorEdad = function (persona) {
  return persona.edad >= MAYORIA_EDAD
} 
*/

// function podemos cambiarlo por la => y si solo tiene 1 parámetro podemos ponerlo sin los ()

/*
const esMayorEdad = persona => {
  return persona.edad >= MAYORIA_EDAD
}
*/


// Si lo unico que hace la funcion es un return podemos borrarlo y quitar las llaves

/* 
const esMayorEdad = persona => persona.edad >= MAYORIA_EDAD
*/

// Desestructuramos la funcion anterior

const esMayorEdad = ({ edad }) => edad >= MAYORIA_EDAD

function imprimirMayorEdad(persona) {
  if (esMayorEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

// Permitir acceso a mayor de edad

function permitirAcceso (persona) {
  // ! lo siguiente debe ser falso
  if (!esMayorEdad(persona)) {
    console.log(`ACCESO DENEGADO`);
  }
}

const esMenorEdad = ({edad}) => !esMayorEdad ({edad})

function denegarAcceso (persona) {
  if (esMenorEdad(persona)) {
    console.log("Acceso DENEGADO");
  } else {
    console.log("Acceso PERMITIDO");
  }
}