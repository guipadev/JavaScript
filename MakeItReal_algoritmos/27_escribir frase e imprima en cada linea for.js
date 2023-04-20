/*
Ejercicio 27
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva l�nea. 
Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba
Nota: Las palabras se separan por espacio.
*/

let msj=prompt("Ingrese una frase")

msj=msj.split(" ")

for (let i=0; i < msj.length; i++){
  console.log(msj[i])
}