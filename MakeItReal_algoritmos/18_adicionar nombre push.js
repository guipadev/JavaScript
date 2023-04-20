/*
Ejercicio 18
Crea un programa a partir de las siguientes instrucciones:

Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "Mar�a", "Juan", "Diana".
P�dele al usuario que ingrese un nombre e ins�rtalo al final del arreglo que creaste en el paso 1.
P�dele al usuario que ingrese otro nombre y reemplaza la tercera posici�n del arreglo con este valor.
Recorre el arreglo e impr�melo.
Un ejemplo de c�mo se comportar�a el programa en la consola ser�a el siguiente:

Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo
*/

let nombres = ["Pedro", "Pablo", "Mar�a", "Juan", "Diana"];



let nombreAdicionar = prompt("Ingrese un nombre");





nombres.push(nombreAdicionar)

;

console.log(nombres);


/*
Ejercicio 19
Escribe un programa que:

Le pida al usuario un n�mero y cree un arreglo de n�meros empezando en el 1 hasta el n�mero que el usuario ingrese (incluy�ndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un n�mero> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programaci�n seg�n lo visto en clase.
*/

var num = parseInt(prompt('Por favor ingrese un n�mero'));



var arr = [];



for(let i=0; i < num; i++){

   arr.push(i + 1)

}

console.log(arr)	//se visualiza los #

//Eliminar segundo elemento
arr.splice(1, 1) 
console.log(arr)

//Recorrer e imprimir el arreglo
 for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }

/*
Ejercicio 20
Imprime la matriz en la consola, el resultado final debe ser el siguiente:

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];
Grupo 1:
  Pablo
  Maria
  Pedro
Grupo 2:
  Diana
  Juan
  Federico
Grupo 3:
  Roberto
  Daniel
  Sandra
Nota 1: utiliza ciclos anidados para solucionar este ejercicio Nota 2: agrega dos espacios al principio de cada nombre
*/

const mat = [
  
["Pablo", "Maria", "Pedro"],
  
["Diana", "Juan", "Federico"],
  
["Roberto", "Daniel", "Sandra"]

];



for(let i=0; i < mat.length; i++){

   console.log("Grupo " + (i+1) + ":")

   for(let j=0; j < mat[i].length; j++){

      console.log(" ", mat[i][j])

   }

}

/*
Ejercicio 21
Completa el siguiente programa para imprimir los n�meros que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu c�digo ac�
El resultado deber�a ser el siguiente:

23
40
12
67
24
39
Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la funci�n filter de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros n�meros.
*/

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]

for (let i=0; i < nums.length; i++) {
  if (nums[i] > 10) {
    console.log(nums[i])
  }
}


/*
Ejercicio 22
Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
El resultado deber�a ser el siguiente:

11

Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la funci�n filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.
*/

const numeros = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];

let sumador=0;

for(let i=0; i < numeros.length; i++){
   if(numeros[i]==1){
     sumador++
   }
} 
console.log(sumador)





