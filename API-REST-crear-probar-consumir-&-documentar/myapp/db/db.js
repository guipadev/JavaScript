/**
 * No usaremos una base de datos real.
 * En su lugar, solo usaremos una matriz simple que funcionará bien para estos fines,
 * aunque, por supuesto, nuestros datos se restablecerán cada vez que nuestro servidor lo haga.
 *
 * Nuestro db objeto contiene una pets propiedad cuyo valor es una matriz de objetos,
 * cada objeto es una mascota.
 * Para cada mascota, almacenamos una identificación, nombre, tipo, edad y raza.
 */

const db = {
  pets: [
    {
      id: 1,
      name: "Rex",
      type: "dog",
      age: 3,
      breed: "labrador",
    },
    {
      id: 2,
      name: "Fido",
      type: "dog",
      age: 1,
      breed: "poodle",
    },
    {
      id: 3,
      name: "Mittens",
      type: "cat",
      age: 2,
      breed: "tabby",
    },
  ],
};

export default db;
