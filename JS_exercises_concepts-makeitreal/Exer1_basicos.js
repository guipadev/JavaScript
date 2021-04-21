Ejercicios d�a 1
Recuerda que puedes hacer preguntas en el Foro de Make It Real.

/*
Ejercicio 1
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.

Recuerda que para pedirle al usuario que escriba una frase debes utilizar el m�todo prompt() y para escribir en la consola debes utilizar el m�todo console.log().
*/
let phrase = prompt('Enter a phrase');



console.log(phrase)

/*
Ejercicio 2
Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamaci�n.

Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
*/

let name = prompt('Enter your name');



console.log("Hola "+ (name)+"!")

/*
Ejercicio 3
Escribe un programa que le pida al usuario ingresar un n�mero, luego le pide un segundo n�mero, e imprima en la consola la suma de los dos n�meros que ingres� el usuario.
*/

let num1 = parseInt(prompt('Enter the first number'));

let num2 = parseInt(prompt('Enter the second number'));


console.log(num1+num2)

/*
Ejercicio 4
Escribe un programa que le pida al usuario su a�o de nacimiento e imprima su edad actual en la consola con la frase "Tienes X a�os". Por ejemplo, asumiendo que el a�o actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:

Tienes 20 a�os
*/


let year = parseInt(prompt('Enter year of birth'));


let currentYear = 2021;
let age = currentYear - year;


console.log('Tienes '+age+' a�os');

/*
Ejercicio 5
El �ndice de masa corporal (IMC), o BMI por sus siglas en ingl�s, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".

Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728".
*/

let weight = parseInt(prompt('Enter your weight'));


let height = parseFloat(prompt('Enter your height, example 1.1'));



let imc=weight/(height**2);



console.log('Tu BMI es '+imc)


