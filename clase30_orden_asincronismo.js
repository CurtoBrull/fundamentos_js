const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
    if (callback) {
      callback()
    }
  })
}

// Asincronismo... no es posible saber en que orden van a llegar las respuestas

// con un callback podemos mantener el orden de llamada

obtenerPersonaje(65, function () {
  obtenerPersonaje(5, function () {
    obtenerPersonaje(4)
  })
})
