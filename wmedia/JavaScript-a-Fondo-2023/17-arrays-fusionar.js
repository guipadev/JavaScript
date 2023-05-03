/**
 * Fusionar Arrays
 *
 * Podemos hacer una copia superficial y fusionar Arrays
 * con la sintaxis de spread
 */

const cats = ["Nino", "Guizmo", "Milo"];

const moreCats = ["Tina", "Moma", "Mila"];

const allCats = [...cats, ...moreCats, ...["Rocky"]];

console.log(allCats); // ["Nino", "Guizmo", "Milo"][("Tina", "Moma", "Mila", "Rocky")];

// Otro ejemplo obtenemos 2 arrays
const mergeArrays = (...arrays) => console.log(...arrays);

mergeArrays(cats, moreCats); // [ 'Nino', 'Guizmo', 'Milo' ] [ 'Tina', 'Moma', 'Mila' ]

// Obtener array multidimensional
const mergeArrays2 = (...arrays) => console.log([...arrays]);

mergeArrays2(cats, moreCats); // [ ['Nino', 'Guizmo', 'Milo'] ['Tina', 'Moma', 'Mila'] ]

// Obtener un array unidemensional con flat() el cual fusiona
const mergeArrays3 = (...arrays) => console.log([...arrays].flat());

mergeArrays3(cats, moreCats); // [ 'Nino', 'Guizmo', 'Milo', 'Tina', 'Moma', 'Mila' ]

/**
 * Shallow copy
 * Un cambio en el array original se propaga en las copias
 * Porque son copias superficiales
 * Porque es un valor compuesto un array, un mapa, un objeto ya que pasa por referencia
 * En cambio los valores primitivos se pasan por valor
 */
const dogs = ["luna", { name: "zeus" }, "atenea"];

const moreDogs = ["luka", "timon", "pumba"];

const allDogs = [...dogs, ...moreDogs];

console.log(allDogs);

dogs[1].name = "Mr. Pulga";

console.log(allDogs);

/**
 * Fusionar Arrays
 *
 * También podemos usar el método estatico "concat" de Array
 * No muta y crea un nuevo array
 */

const allCats2 = cats.concat(moreCats);

const evenMoreCats = [].concat(cats, moreCats, ["Milo"]);
