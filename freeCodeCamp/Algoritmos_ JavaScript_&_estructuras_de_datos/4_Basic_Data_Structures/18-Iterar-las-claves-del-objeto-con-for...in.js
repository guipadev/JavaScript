/*
Iterar a través de las claves de un objeto con una instrucción for...in

A veces es necesario iterar a través de todas las claves dentro de un objeto. 
Puede usar un bucle for...in para hacer esto. El bucle for...in se ve así:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}

Este código registra milk 1 y eggs 12, con cada par clave-valor en su propia línea.

Definimos la variable food en el encabezado del ciclo y esta variable se configuró 
en cada una de las teclas del objeto en cada iteración, lo que resultó en que el nombre de cada alimento 
se imprimiera en la consola.

NOTA: Los objetos no mantienen un orden en las claves almacenadas como lo hacen las matrices; por lo tanto, 
la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante 
al hacer referencia o acceder a esa clave.
*/

/*
Hemos definido una función countOnline que acepta un argumento, allUsers. 
Utilice una instrucción for...in dentro de esta función para recorrer el allUsers objeto 
y devolver la cantidad de usuarios cuya propiedad en línea está establecida en true. countOnline 
A continuación se muestra un ejemplo de un objeto al que se podría pasar. 
Cada usuario tendrá una online propiedad establecida en true o false.

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}
*/

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  let result = 0;

  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }

  return result;
}
