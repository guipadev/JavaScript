const array = [1, 1, 1]
const plusONe = async n => n + 1

const result = array.map(plusOne)

console.log(result) // [Promise, Promise, Promise]

// La función asincrona sin importar que lo que haga adentro o al final se asincrono lo que
// hace es devolver una promesa, ya que no estamos esperando la resolucion de la promesa
