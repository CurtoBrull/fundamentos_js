const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
  .get(url, opts, callback)
  .fail( () => {
    console.log(`Sucedió un error. No se puede obtener ${id}`);
  })
}

obtenerPersonaje(65, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(5, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(4, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)      
    })
  })
})
