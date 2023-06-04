/*
Copiar una matriz con el operador Spread

Mientras que slice () nos permite ser selectivos sobre qu� elementos de una matriz copiar, 
entre varias otras tareas �tiles,
el nuevo operador de extensi�n de ES6 nos permite copiar f�cilmente todos los elementos de 
una matriz, en orden, 
con una sintaxis simple y altamente legible.
La sintaxis de propagaci�n simplemente se ve as�: ...

En la pr�ctica, podemos usar el operador de propagaci�n para copiar una matriz como esta:

let thisArray = [true, true, undefined, false, null];

let thatArray = [...thisArray];

thatArray�// [true, true, undefined, false, null]

thatArray es igual a [true, true, undefined, false, null]. 
thisArray permanece sin cambios y thatArray contiene los mismos elementos que thisArray.
*/

/*
Hemos definido una funci�n, copyMachine, que toma arr (una matriz) y num (un n�mero) 
como argumentos. 
Se su pone que la funci�n devuelve una nueva matriz formada por num copias de arr. 
Hemos hecho la mayor parte del trabajo por usted, pero todav�a no funciona del todo bien. 
Modifique la funci�n usando la sintaxis de propagaci�n para que funcione correctamente 
(pista: �otro m�todo que ya hemos cubierto podr�a ser �til aqu�!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
*/

/*
Pista 1
La sugerencia final del ejemplo le indica que utilice un m�todo aprendido recientemente.
Pista 2
El operador de propagaci�n copia todos los elementos en un nuevo objeto vac�o.

while (num >= 1) {
    newArr = [...arr]
    num--;
}

-El c�digo anterior copiar� todos los elementos en newArr pero tambi�n reinicializar� 
newArr con cada nueva iteraci�n del ciclo while.

Primero se debe inicializar una nueva variable usando el operador de extensi�n 
- let obj = [... arr]; 
- entonces esta variable debe agregarse a newArr para cada iteraci�n del ciclo while.
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
