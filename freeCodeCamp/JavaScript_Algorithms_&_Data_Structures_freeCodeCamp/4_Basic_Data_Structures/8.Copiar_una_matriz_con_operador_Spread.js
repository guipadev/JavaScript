/*
Copiar una matriz con el operador Spread

Mientras que slice () nos permite ser selectivos sobre qué elementos de una matriz copiar, entre varias otras tareas útiles,
el nuevo operador de extensión de ES6 nos permite copiar fácilmente todos los elementos de una matriz, en orden, 
con una sintaxis simple y altamente legible.
La sintaxis de propagación simplemente se ve así: ...

En la práctica, podemos usar el operador de propagación para copiar una matriz como esta:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

thatArray // [true, true, undefined, false, null]

thatArray es igual a [true, true, undefined, false, null]. thisArray permanece sin cambios y thatArray contiene los mismos elementos que thisArray.
*/

/*
Hemos definido una función, copyMachine, que toma arr (una matriz) y num (un número) como argumentos. 
Se supone que la función devuelve una nueva matriz formada por num copias de arr. 
Hemos hecho la mayor parte del trabajo por usted, pero todavía no funciona del todo bien. 
Modifique la función usando la sintaxis de propagación para que funcione correctamente 
(pista: ¡otro método que ya hemos cubierto podría ser útil aquí!).
*/

/*
Pista 1
La sugerencia final del ejemplo le indica que utilice un método aprendido recientemente.
Pista 2
El operador de propagación copia todos los elementos en un nuevo objeto vacío.

while (num >= 1) {
    newArr = [...arr]
    num--;
}

-El código anterior copiará todos los elementos en newArr pero también reinicializará 
newArr con cada nueva iteración del ciclo while.

Primero se debe inicializar una nueva variable usando el operador de extensión - let obj = [... arr]; 
- entonces esta variable debe agregarse a newArr para cada iteración del ciclo while.
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));