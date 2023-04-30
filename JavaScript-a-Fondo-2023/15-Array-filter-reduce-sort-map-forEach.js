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
 * Muta el array original
 */

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(); // [ 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function (num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// refactorizado sort
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function (num1, num2) {
  return num1 - num2; // forma asc cambia posiciones
});

// Ordenar los empleados
const ordenEmpleado = [...employees].sort(function (a, b) {
  // hacemos una copia para no mutar el array original
  return a.salary - b.salary;
});

// refactorizado
const ordenEmpleado2 = [...employees].sort((a, b) => a.salary - b.salary);

console.log(ordenEmpleado);
/*
[
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]
*/

/**
 * Array reduce
 * Reduce los valores del Array a un único valor
 */

const total = [1, 2, 3, 4, 5, 6, 7].reduce(function (total, current) {
  console.log(total, current); // current => siguiente
  return total + current;
});

console.log(total);

/*
1 2
3 3
6 4
10 5
15 6
21 7
28
*/

// Conocer el total de salario de los 3 empleados
const totalSalaries = employees.reduce(function (total, current) {
  return total + current.salary;
}, 0); // 0 ya que el total seria el objeto y daria [object Object]7500080000

// refactorizado
const totalSalaries2 = employees.reduce(
  (total, current) => total + current.salary,
  0
);

console.log(totalSalaries); // 245000

/**
 * Method chaining, funciones de orden mayor combinadas
 * Aplicar varios metodos para obtener un resultado esperado
 */

const totalHightier = employees
  .map((employee) => employee.salary)
  .filter((salary) => salary > 75000)
  .reduce((total, current) => total + current);

console.log(totalHightier); // 170000
