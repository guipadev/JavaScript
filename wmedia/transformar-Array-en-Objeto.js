const persons = [
  ["nombre", "valeria"],
  ["edad", 27],
];

/**
 * La forma más elaborada
 */
persons.reduce((total, actual) => {
  const [propiedad, valor] = actual;
  return { ...total, [propiedad]: valor };
}, {}); // { nombre: 'Valeria', edad: 27 }

/**
 * Si no necesitamos hacer nada más con los valores que tenemos
 * entonces utilizamos mejor
 */
Object.fromEntries(persons); // { nombre: 'Valeria', edad: 27 }
