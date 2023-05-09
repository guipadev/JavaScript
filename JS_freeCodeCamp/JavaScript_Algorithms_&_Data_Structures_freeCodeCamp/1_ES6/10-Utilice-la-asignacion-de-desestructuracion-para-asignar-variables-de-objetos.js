/*
Utilice la asignación de desestructuración para asignar variables de objetos

La desestructuración le permite asignar un nuevo nombre de variable al extraer valores. 

Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del último ejemplo:

const user = { name: 'John Doe', age: 34 };

Así es como puede dar nuevos nombres de variables en la tarea:

const { name: userName, age: userAge } = user;

Puede leerlo como "obtener el valor de user.name y asignarlo a una nueva variable llamada userName" 
y así sucesivamente. 

El valor de userName sería la cadena John Doe y el valor de userAge sería el número 34.

Reemplace las dos asignaciones con una asignación de desestructuración equivalente.
 
Todavía debe asignar las variables highToday y highTomorrow los valores de today y tomorrow 
desde el HIGH_TEMPERATURESobjeto.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
