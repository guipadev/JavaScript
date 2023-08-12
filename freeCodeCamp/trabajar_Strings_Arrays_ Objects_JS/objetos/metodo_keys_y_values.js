/**
 * Los métodos .keys() y .values()
 * Ahora, para obtener una lista de ciertas propiedades del objeto, podemos llamar
 * al método estático keys().
 * Para obtener una lista de los valores correspondientes a sus propiedades,
 * podemos llamar al método estático de valores().
 * Una nota importante es que la lista es una matriz.
 */

let obj = { name: "John Doe", age: 45 };

let keys = Object.keys(obj); // output ['name', 'age']

let values = Object.values(obj); // output ['John Doe', 45]
