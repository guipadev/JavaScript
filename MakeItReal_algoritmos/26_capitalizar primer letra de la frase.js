/*
Ejercicio 26
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba
*/

const phrase=prompt("Ingresa una frase:")
const words = phrase.split(" ")

for(let i=0; i<words.length; i++){
   const w = words[i]
   words[i] = w[0].toUpperCase() + w.substring(1)   
}

console.log(words.join(" "))