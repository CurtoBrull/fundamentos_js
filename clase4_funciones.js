var nombre = 'Javier', edad = 41

// Si la funcion no acepta parámetros "imprimirEdad()" siempre va a imprimir lo mismo aunque al llamar la funcion le pasemos parámetros "imprimirEdad('Sara', 28)"
function imprimirEdad() {
  console.log(`${nombre} tiene ${edad} años.`);
}

imprimirEdad()

function imprimirEdad2(n, e) {
  console.log(`${n} tiene ${e} años.`);
}

imprimirEdad2('Sara', 28)
