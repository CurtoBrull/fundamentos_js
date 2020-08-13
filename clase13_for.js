var javier = {
  nombre: 'Javier',
  apellido: 'Curto',
  edad: 41,
  peso: 116,
}

var izhan = {
  nombre: 'Izhan',
  apellido: 'Curto',
  edad: 12,
  peso: 53,
}

console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso} Kg.`);
console.log(`Al inicio del año ${izhan.nombre} pesa ${izhan.peso} Kg.`);

/*
function aumentaPeso (persona) {
  return persona.peso += 200
}
*/
const CAMBIO_PESO = 0.2
const DIAS_ANO = 365


const aumentaPeso = persona => persona.peso += CAMBIO_PESO
const bajaPeso = persona => persona.peso -= CAMBIO_PESO


for (let i = 1; i <= DIAS_ANO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    // aumenta peso
    aumentaPeso(javier)
  } else if (random < 0.50) {
    // baja de peso
    bajaPeso(javier)
  }
}

console.log(`Al final del año ${javier.nombre} pesa ${javier.peso.toFixed(1)} Kg.`);

for (let i = 1; i <= DIAS_ANO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    // aumenta peso
    aumentaPeso(izhan)
  } else if (random < 0.50) {
    // baja de peso
    bajaPeso(izhan)
  }
}

console.log(`Al final del año ${izhan.nombre} pesa ${izhan.peso.toFixed(1)} Kg.`);