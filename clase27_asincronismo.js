console.log('a');
// Funcion + delay
// setTimeout(function () {
//   console.log('b');
// }, 2000)
setTimeout(()=> console.log('b'), 2000)
setTimeout(()=> console.log('c'), 0)
console.log('d');

setTimeout(()=> console.log('e'), 2000)

// setTimeout siempre se ejecutará despues del programa principal
// el tiempo que se indica al setTimeout es un tiempo mínimo de espera
for (let i = 0; i < 10000000000; i++) {
  
}