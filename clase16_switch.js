var signo = prompt('¿Cuál es tu signo?')


switch (signo) {
  case 'Aries': 
    console.log('Te apetece un plan diferente hoy y descubrir algo que no habías intentado hacer nunca, quizá un deporte.');
    break
  case 'Tauro': 
    console.log('Hoy lo más importante es que sigas todo lo que te dicta tú gran ingenio');
    break
  case 'Géminis': 
  case 'Geminis': 
    alert('Hoy es un buen día para meterla en caliente.');
    break
  case 'Cáncer': 
  case 'Cancer': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Leo': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Virgo': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Libra': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Escorpio': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Sagitario': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Capricornio': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Acuario': 
    console.log('Hoy es un buen día para meterla en caliente.');
    break
  case 'Piscis': 
  case 'piscis': 
    alert('Hoy es un día muy especial para dar cariño manual a los tuyos, a los más cercanos y que te den lo tuyo fuertemente.');
    break
  // Si no se cumple nada de lo anterior
  default:
    console.log(`${signo} no es un signo zodiacal válido`);
    break
}
