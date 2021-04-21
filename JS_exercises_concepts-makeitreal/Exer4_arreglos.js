//Ejercicios día 4

/*
Ejercicio 18
Crea un programa a partir de las siguientes instrucciones:

Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
Recorre el arreglo e imprímelo.
Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo
*/

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];



let nombreAdicionar = prompt("Ingrese un nombre");




nombres.push(nombreAdicionar)

;

console.log(nombres);


/*
Ejercicio 19
Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un número> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.
*/

var num = parseInt(prompt('Por favor ingrese un número'));



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
Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá
El resultado debería ser el siguiente:

23
40
12
67
24
39
Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros números.
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
El resultado debería ser el siguiente:

11

Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.
*/

const numeros = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];

let sumador=0;

for(let i=0; i < numeros.length; i++){
   if(numeros[i]==1){
     sumador++
   }
} 
console.log(sumador)





