Ejercicios día 1
Recuerda que puedes hacer preguntas en el Foro de Make It Real.

/*
Ejercicio 1
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.

Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir en la consola debes utilizar el método console.log().
*/
let phrase = prompt('Enter a phrase');



console.log(phrase)

/*
Ejercicio 2
Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.

Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
*/

let name = prompt('Enter your name');



console.log("Hola "+ (name)+"!")

/*
Ejercicio 3
Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.
*/

let num1 = parseInt(prompt('Enter the first number'));

let num2 = parseInt(prompt('Enter the second number'));


console.log(num1+num2)

/*
Ejercicio 4
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:

Tienes 20 años
*/


let year = parseInt(prompt('Enter year of birth'));


let currentYear = 2021;
let age = currentYear - year;


console.log('Tienes '+age+' años');

/*
Ejercicio 5
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".

Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728".
*/

let weight = parseInt(prompt('Enter your weight'));


let height = parseFloat(prompt('Enter your height, example 1.1'));



let imc=weight/(height**2);



console.log('Tu BMI es '+imc)


