/**
 * Qué es un objeto
 * Los objetos JavaScript son estructuras en cuyo interior se
 * guardan "colecciones de pares" propiedad-valor
 */

const cat = {
  name: "Guizmo",
  color: "black",
};

/**
 * Qué es un objeto
 * Además de Strings y otros valores primitivos, dentro
 * de un objeto puedes guardar Arrays e incluso otros objetos
 */

const cat2 = {
  name: "Guizmo",
  color: "black",
  address: {
    city: "Valencia",
    postacolde: 42157,
    coords: {
      lat: 31.13123,
      lang: 5.3123123,
    },
  },
};

console.log(cat2.address.coords.lang); // 5.3123123

/**
 * Orden de propiedades
 * El orden en que se creen las propiedades en un objeto "no tiene importancia",
 * ya que (a diferencia de los Array) se accede a ellas a través de un identificador
 */

const address = {
  city: "Valencia",
  postacolde: 42157,
};

console.log(address.city); // Valencia

/**
 * Creación de un objeto
 * La manera más sencilla de crear un objeto es con la "notación literal",
 * es decir, usar las lalves { } para crear un nuevo objeto y guardarlo
 * en una variable
 */

const user = {
  rol: "Developer",
  team: "FE",
};

// "Deprecated" esta es otra forma, la cual es obsoleta
const person = new Object({ name: "Juan" });

/**
 * Valor vs Referencia
 * Los objetos (igual que los Arrays) se pasan por referencia y no por valor
 */

const userIT = { rol: "Developer" };

const userReference = userIT;

userReference.name = "Juan";

console.log(userIT); // { rol: 'Developer', name: 'Juan' }
