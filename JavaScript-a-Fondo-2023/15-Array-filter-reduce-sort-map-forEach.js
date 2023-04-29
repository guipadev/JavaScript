let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

/**
 * Recorrido con for
 */

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

/**
 * Array forEach
 */

employees.forEach(function (employee) {
  console.log(employee.name);
});

// forEach con indice
employees.forEach((employee, index) => console.log(employee.name, index));

/**
 * Array filter
 * No muta la original y crear un nuevo Array
 */

const highTier = employees.filter(function (employee) {
  return employee;
});

// filter con un test
const highTier2 = employees.filter(function (employee) {
  if (employee.salary > 75000) {
    return true;
  }
});

// Refactorizado
const highTier3 = employees.filter((employee) => employee.salary > 75000);

console.log(highTier);
console.log(highTier2);
console.log(highTier3);

/**
 * Array map
 * Crea un nuevo Array del original con misma logitud
 * Pero con alguna transformación
 * No muta
 */

const uppercase = employees.map(function (employee) {
  return employee.name.toLocaleUpperCase();
});

console.log(uppercase); // [ 'JOHN', 'DAVID', 'ANA' ]

// map con una transformación
const employeesTier = employees.map(function (employee) {
  return {
    name: employee.name,
    tier: employee.salary > 75000 ? "high" : "mid",
  };
});

console.log(employeesTier);

/**
[
  { name: 'John', tier: 'high' },
  { name: 'David', tier: 'mid' },
  { name: 'Ana', tier: 'high' }
]
**/

/**
 * Array sort
 * Ordenar los elementos
 */

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(); // [ 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]
