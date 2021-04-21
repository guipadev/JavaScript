/*
Ejercicio 12
Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces.
*/

var frase = prompt('Ingresa una frase');

for(var i =0;  i< 10;  i++ ){
    console.log(frase)
}

Comparte tu respuesta en este enlace.

/*
Ejercicio 13
Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:

Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
*/

var frase = prompt('Ingresa una frase');
var repetirFrase = prompt('Cuantas veces quiere imprimir su frase');

for(var i =0;  i< repetirFrase;  i++ ){
    console.log(frase)
}

/*
Ejercicio 14
Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.

Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:

1
2
3
4
5
*/

var numero= parseInt(prompt('Ingresa un numero para imprimir secuencia'));

for(var i =1;  i<= numero;  i++ ){
    console.log(i)
}

/*
Ejercicio 15
Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

5
6
7
8
9
10
Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.

Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.
*/

var num1 = parseInt(prompt('Enter first number'));
var num2 = parseInt(prompt('Enter second number'));

for(var i =num1;  i <= num2;  i++ ){
    console.log(i)
}

/*
Ejercicio 16
Escribe un programa que:

Le pida al usuario un string (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
*/

var frase = prompt('Ingresa una frase');

while(frase != 'salir'){
    console.log(frase)
    frase = prompt("Ingresa frase")
}
console.log("Hasta pronto!")

/*
Ejercicio 17
Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.
*/

var num = Math.floor(Math.random() * (10 - 1)) + 1;
//console.log(num) //saber el # elegido al azar

var numIngresado = prompt("Adivina el número entre 1 y 10")

while(numIngresado != num){
    numIngresado = prompt("Intenta nuevamente, ingresando otro número")
}
console.log("Felicitaciones, acerto el número")  