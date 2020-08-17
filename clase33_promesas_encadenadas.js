const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
              resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`ERROR! No se pudo obtener el personaje ${id}.`)
}

obtenerPersonaje(1)
    .then(personaje => {
      console.log(`El pj es ${personaje.name}`)
      return obtenerPersonaje(2)
    })
    .then(personaje => {
      console.log(`El pj es ${personaje.name}`)
      return obtenerPersonaje(90)
    })
    .then(personaje => {
      console.log(`El pj es ${personaje.name}`)
    })
    .catch(onError)