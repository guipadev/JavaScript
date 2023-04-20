//EJERCICIOS DIA 5

/*
Ejercicio 23
Escribe un programa que le pida una frase al usuario y la repita en mayúsculas. Por ejemplo:

Ingresa una frase> Hola Mundo
HOLA MUNDO
*/

let phrase = prompt('Enter phrase');

console.log(phrase.toLocaleUpperCase())

/*
Ejercicio 24
Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"
*/

const frase = prompt('Ingresa una frase')
let cuenta = 0

for(let i=0; i<frase.length; i++){
    if(frase[i] == 'a'){
       cuenta++
    }
}
console.log(`La frase tiene ${cuenta} caracteres a`)

/*
Ejercicio 25
Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".

Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4
Nota: Aunque esta es una forma de generar contraseñas no se considera segura y no la recomendamos.
*/

let palabras = prompt('Ingresa frase')

palabras = palabras.toLowerCase()
palabras = palabras.replace(/a/g,4)
palabras = palabras.replace(/e/g,3)
palabras = palabras.replace(/i/g,1)
palabras = palabras.replace(/o/g,0)

console.log(palabras.replace(/ /g, ""));

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

/*
Ejercicio 27
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

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

/*
Ejercicio 28 (Bonus)
Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común
*/

const phrase1=(prompt("Ingresa la frase 1"))
const phrase2=(prompt("Ingresa la frase 2"))

const coincidencia = []

for(let i=0; i<phrase1.length; i++){
    const caracter1 = phrase1.charAt(i)
    for (let j=0; j<phrase2.length; j++){
        const caracter2 = phrase2.charAt(j)
  	if (caracter1 == caracter2){
	    if (coincidencia.indexOf(caracter1) == -1 ){
	       coincidencia.push(caracter1)
	    }
	}
    }
}

if (coincidencia.length > 0){
    console.log("Los caracteres en común son: " + coincidencia.join(", "))
}else{
     console.log("No se encontraron caracteres en común") 
  }
