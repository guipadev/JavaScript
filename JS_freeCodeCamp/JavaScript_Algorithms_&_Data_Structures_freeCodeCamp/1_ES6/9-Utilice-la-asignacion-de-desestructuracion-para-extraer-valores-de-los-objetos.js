/*
Utilice la asignación de desestructuración para extraer valores de los objetos

La asignación de desestructuración es una sintaxis especial introducida en ES6, 
para asignar claramente valores tomados directamente de un objeto.

Considere el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;

const age = user.age;

name tendría un valor de la cadena John Doe, y age tendría el número 34.

Aquí hay una declaración de asignación equivalente que usa la sintaxis 
de desestructuración de ES6:

const { name, age } = user;

Nuevamente, name tendría un valor de la cadena John Doe 
y age tendría el número 34.

Aquí, las variables name y age se crearán y se les asignarán los valores de sus respectivos valores 
del user objeto. Puedes ver cuánto más limpio es esto.

Puede extraer tantos o tan pocos valores del objeto como desee.

Reemplace las dos asignaciones con una asignación de desestructuración equivalente. 
Todavía debe asignar las variables today y tomorrow los valores de today y tomorrow 
desde el HIGH_TEMPERATURES objeto.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;
