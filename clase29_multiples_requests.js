const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`);  
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

// Asincronismo... no es posible saber en que orden van a llegar las respuestas
obtenerPersonaje(65)
obtenerPersonaje(5)
obtenerPersonaje(4)

for (let i = 1; i < 84; i++) {
  obtenerPersonaje(i)
}