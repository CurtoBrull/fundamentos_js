var contador = 0

const llueve = () => Math.random() < 0.25

do {
  // incrementa contador
  contador++
  // hasta que llueva sea TRUE
} while (!llueve());

/*
if (contador === 1) {
  console.log(`Fuí a ver si llovía ${contador} vez`)
} else {
  console.log(`Fuí a ver si llovía ${contador} veces`)
}
*/

// Lo mismo con operador ternario

/*
contador === 1 ? console.log(`Fuí a ver si llovía ${contador} vez`) : console.log(`Fuí a ver si llovía ${contador} veces`)
*/

console.log(`Fuí a ver si llovía ${contador} ${contador === 1 ? 'vez' : 'veces'}`);