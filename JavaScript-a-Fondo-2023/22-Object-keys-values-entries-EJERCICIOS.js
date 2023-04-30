/**
 * Object keys, values y entries
 *
 * El método keys de Object retorna un Array con las
 * propiedades (keys) enumerables de un objeto
 */

const persona = {
  nombre: "Juan",
  profesion: "Dev",
  ciudad: "Valencia",
};

Object.keys(persona).forEach((key) => console.log(key)); // nombre profesion ciudad

// Ejemplo
const persons = {
  laura: 22,
  raul: 76,
  marta: 53,
  jorge: 18,
  valeria: 15,
};

Object.keys(persons); // [ 'laura'], 'raul', 'marta', 'jorge', 'valeria' ]

/**
 * Object keys, values y entries
 *
 * El método values de Object retorna un Array con los
 * valores (values) de las propiedades enumerables de un objeto
 */

const people = {
  nombre: "Andres",
  profesion: "Dev",
};

for (const value of Object.values(people)) {
  console.log(value); // Andres Dev
}

// Ejemplo
Object.values(persons); // [ 22, 76, 53, 18, 15 ]

// Ejemplo iterar
Object.values(persons).forEach((person) => console.log(person)); // 22 76 53 18 15

/**
 * Object keys, values y entries
 *
 * El método entries de Object retorna un Array con los pares
 * de propiedades y valor (key-value) de las propiedades enumerables de un objeto
 */

const deportista = {
  nombre: "Messi",
  profesion: "Futbolista",
};

for (const [key, value] of Object.entries(deportista)) {
  console.log(key, value); // nombre Messi  profesion Futbolista
}

// Ejemplo
Object.entries(persons).forEach((person) => console.log(person));

/*
[ 'laura', 22 ]
[ 'raul', 76 ]
[ 'marta', 53 ]
[ 'jorge', 18 ]
[ 'valeria', 15 ]
*/

/**
 * Averigua, con Object.keys, si el objeto persons tiene propiedades.
 */

const hasProperties = !!Object.keys(persons).length; // true

/**
 * Con Object.values y Array.reduce averigua la suma total de todas las edades en persons.
 */

const totalAge = Object.values(persons).reduce(
  (total, current) => total + current
);

/**
 * Con Object.entries, Array.filter y Array.sort
 * crea un Array con con las propiedades de persons cuyo valor no supera 18,
 * ordenadas de menor a mayor.
 */

for (const [name, age] of Object.entries(persons)
  .sort((a, b) => a[1] - b[1])
  .filter((person) => person[1] > 18)) {
  console.log(name, age);
}
