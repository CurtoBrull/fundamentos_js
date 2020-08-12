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

function esMayorEdad(persona) {
  return persona.edad >= MAYORIA_EDAD
}

function imprimirMayorEdad(persona) {
  if (esMayorEdad) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}