/*
Modify an Object Nested Within an Object

Ahora echemos un vistazo a un objeto un poco más complejo.
Las propiedades de los objetos se pueden anidar a una profundidad arbitraria 
y sus valores pueden ser cualquier tipo de datos admitidos por JavaScript, 
incluidas las matrices e incluso otros objetos. Considera lo siguiente:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

nestedObject tiene tres propiedades: id (el valor es un número), 
date (el valor es una cadena) 
y data (el valor es un objeto con su estructura anidada). 

Si bien las estructuras pueden volverse complejas rápidamente, aún podemos usar 
las mismas notaciones para acceder a la información que necesitamos. 

Para asignar el valor 10 a la propiedad busy del objeto onlineStatus anidado, 
usamos la notación de puntos para hacer referencia a la propiedad:

nestedObject.data.onlineStatus.busy = 10;
*/

/*
Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él.
Establezca el valor de la clave online en 45.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
*/

/*
Explicación del problema

Recuerde que el objeto que desea cambiar tiene dos niveles de profundidad, 
la notación de puntos es más fácil de usar en este caso.

Simplemente defina el objeto y luego use la notación de puntos para acceder 
al segundo objeto y finalmente al elemento final que desea modificar.

EXAMPLE:

let myObject = {
  level_1: "outside",
  first_level_object: {
    level_2: "2 levels deep",
    second_level_object: {
      level_3: "3 levels deep"
    }
  }
};

//The following line of code will modify the data found in level_2.
myObject.first_level_object.level_2 = "level-2 has been reached";
*/

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);
