//Ejercicios d�a 6

/*
Ejercicio 29
Escribe una funci�n llamada suma que reciba dos n�meros y retorne la suma de los dos n�meros.

// escribe la funci�n suma ac�

// c�digo de prueba, verifica que aparezcan los valores correctos en la consola
console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168
Comparte tu respuesta en este enlace. No incluyas el c�digo de prueba.
*/

function suma(num1, num2){
  return num1 + num2
}

console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168

/*
Ejercicio 30
Escribe una funci�n llamada hola que reciba un argumento (una cadena de texto) y retorne "Hola " seguido del argumento y un signo de exclamaci�n.

// escribe la funci�n hola ac�

// c�digo de prueba
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"
*/

function hola(palabra){
  return `Hola ${palabra} !`
}

// c�digo de prueba
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"

/*
Ejercicio 31
El �ndice de masa corporal (IMC), o BMI por sus siglas en ingl�s, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2

Escribe una funci�n llamada bmi que reciba dos argumentos: peso y altura. Utiliza la f�rmula para retornar el BMI correspondiente.

// escribe la funci�n bmi ac�

// c�digo de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695
*/

function bmi(peso, altura){
  return peso / (altura*altura)
}

//arrow function
const imc = (peso, altura) => {
  return peso / (altura*altura)
}

/*
Ejercicio 32
La funci�n calcularColor recibe un n�mero como argumento y retorna un string de acuerdo al n�mero:

Si el n�mero es 1 retorna "El color es negro".
Si el n�mero es 2 retorna "El color es blanco".
Si el n�mero es 3 retorna "El color es azul".
De lo contrario retorna "El color es verde".
El problema es que la funci�n tiene algunos errores y no est� funcionando. Tu misi�n es corregirla para que funcione correctamente seg�n lo anterior.

function calcuarColor() {
  if (num === 1) {
    let color = "black";
  } else (num = 2) {
    let color = "blanco":
  } else if (num === 3) {
    let color = "rojo";
  } else {
    let color = "verde";
  }

  return "El color es " + color;
}

// c�digo de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"
*/

function calcularColor(num) {
  if (num == 1) {
    var color = "negro";
  } else if (num == 2) {
    var color = "blanco";
  } else if (num == 3) {
    var color = "azul";
  } else {
    var color = "verde";
  }
  return `El color es ${color}`
}

// c�digo de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"

/*
Ejercicio 33
Escribe una funci�n llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra est� separada por espacio.

// c�digo de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make It Real"
*/

var cadena = prompt("Ingrese texto a capitalizar");
var arregloDeSubCadenas = cadena.split(" ");

function capitalizar(arregloDeSubCadenas){
  for(let i=0; i<arregloDeSubCadenas.length; i++){
   const w = arregloDeSubCadenas[i]
   arregloDeSubCadenas[i] = w[0].toUpperCase() + w.substring(1)   
  }
  return arregloDeSubCadenas.join(" ")
}

console.log(capitalizar(arregloDeSubCadenas))

/*
Ejercicio 34
Escribe una funci�n llamada promedio que reciba un arreglo de n�meros y retorne el promedio los elementos.

// c�digo de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
*/

function promedio (arreglo){
  let sumatoria = arreglo.reduce(function(a, b){
    return a + b; //Regresa el acumulador m�s el siguiente
  }, 0); //Pero si no encuentras nada o no hay siguiente, regresa 0
  return sumatoria / arreglo.length;
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200