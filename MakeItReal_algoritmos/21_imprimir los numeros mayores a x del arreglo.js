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