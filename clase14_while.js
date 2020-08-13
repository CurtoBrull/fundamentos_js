var javier = {
  nombre: 'Javier',
  apellido: 'Curto',
  edad: 41,
  peso: 116,
}

console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso} Kg.`);

const CAMBIO_PESO = 0.3
const DIAS_ANO = 365

const aumentaPeso = persona => persona.peso += CAMBIO_PESO
const bajaPeso = persona => persona.peso -= CAMBIO_PESO
const comeMucho = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.5

const META = javier.peso - 16
var dias = 0


while (javier.peso > META) {
  if (comeMucho()) {
    // aumenta peso
    aumentaPeso(javier)
    console.log(`Día ${dias}: Como y peso ${javier.peso.toFixed(1)}Kg`)
  }else if (deporte()) {
    // baja peso
    bajaPeso(javier)
    console.log(`Día ${dias}: Hago deporte y peso ${javier.peso.toFixed(1)}Kg`)
  } else {
    console.log(`Día ${dias}: No hago nada y peso ${javier.peso.toFixed(1)}Kg`)
  }  
  dias += 1
}

console.log(`Después de ${dias} días ${javier.nombre} pesa ${javier.peso.toFixed(1)} Kg.`);