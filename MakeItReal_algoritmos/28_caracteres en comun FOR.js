/*
Ejercicio 28 (Bonus)
Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en com�n. 
Si no tienen caracteres en com�n debe imprimir "No se encontraron caracteres en com�n".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en com�n son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en com�n
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
    console.log("Los caracteres en com�n son: " + coincidencia.join(", "))
}else{
     console.log("No se encontraron caracteres en com�n") 
  }
