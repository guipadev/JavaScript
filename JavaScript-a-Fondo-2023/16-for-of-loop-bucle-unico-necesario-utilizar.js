const employees = ["Alexander", "Anna", "Zion"];

/**
 * Imperativo, porque le indicamos CÓMO proceder
 */

const results = [];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].length > 4) results.push(employees[i]);
}

console.log(results); // [ 'Alexander' ]

// Otra forma Imperativa
const results2 = [];

employees.forEach((employee) => {
  if (employees.length > 4) results2.push(employee);
});

/**
 * Forma declarativa QUÉ quiero
 */

const results3 = employees.filter((employee) => employee.length > 4);

console.log(results3);

/**
 * Usando for...of
 * Tiene lo mejor de for y forEach
 * no hay necesidad de contar los indices como en for y validar que no entre en ciclo infinito
 * y mejor que forEach que es solo para array en cambio este se puede usar en string, arrays
 * podemos usar break y continue
 */

const results4 = [];

for (const employee of employees) {
  if (employee.length > 4) results4.push(employee);
  // break
}

// Ejemplo for...of en string

const string = "Esto es una string";

for (const char of string) {
  console.log(char);
}

/*
E
s
t
o
 
e
s
 
u
n
a
*/

// Ejemplo como for...of podria iterar con un Objeto

const developer = {
  name: "Juan",
  city: "Valencia",
  skills: ["JavaScript", "Vue", "CSS"],
};

for (const property of Object.entries(developer)) {
  console.log(property);
}

// Uso destructuración
for (const [key, value] of Object.entries(developer)) {
  console.log(key, value);
}

/**
 * Propio iterador - iterator protocol
 * Para hacer algun tipo de transformación
 * o algo más elaborado que recorrer las propiedades con object, key, value
 */

developer[Symbol.iterator] = function () {
  let i = 0;

  return {
    next: () => ({
      value: this.skills[i++],
      done: i > this.skills.length,
    }),
  };
};

for (const skill of developer) {
  console.log(skill);
}
