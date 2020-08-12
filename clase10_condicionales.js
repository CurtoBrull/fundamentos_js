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

console.log(imprimirProfesiones(javier));

// Imprimir si es mayor de edad o no

function imprimirMayorEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);    
  }
}
console.log(imprimirMayorEdad(javier));