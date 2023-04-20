/*
Ejercicio 6
Escribe un programa que le pida un n�mero al usuario e imprima en la consola si el n�mero es mayor o menor/igual a 10.

Si es mayor debe imprimir "El n�mero es mayor a 10".

Si es menor debe imprimir "El n�mero es menor o igual a 10".
*/

var num = parseInt(prompt('Enter a number'));


if (num > 10){

    console.log('El n�mero es mayor a 10')

}else if(num <= 10){

    console.log('El n�mero es menor a 10')
}
else{

    console.log('Por favor ingresa un numero')

}

/*
Ejercicio 7
Escribe un programa que piense un n�mero de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el n�mero es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
*/

 var numeroAleatorio = parseInt(Math.random()* 10)+1;
 console.log(numeroAleatorio);

  var num;

  while(numeroAleatorio != num){

      num = prompt("Ingrese un n�mero por favor: ");

      if (numeroAleatorio == num){

        console.log("Felicitaciones, ese era!");

      }else{

        console.log("Lo siento, intenta nuevamente!");

      }

  }

/*
Ejercicio 8
Un m�ltiplo de 5 es aquel que dividido por 5 da por resultado un n�mero entero (sin residuo). Por ejemplo 10, 15, 20, etc. son m�ltiplos de 5. 11 no es m�ltiplo de 5 porque quedar�a un residuo de 1.

Escribe un programa que le pida al usuario un n�mero e imprima si es un m�ltiplo de 5 o no.

Si es m�ltiplo debe imprimir "Si, el n�mero x es m�ltiplo 5", de lo contrario debe imprimir "No, el n�mero x no es m�ltiplo de 5".
*/

var num = parseInt(prompt('Enter a number'));



if(num % 5 == 0){
    console.log('Si, el n�mero x es m�ltiplo 5');
}else{
   console.log('No, el n�mero x no es m�ltiplo de 5')
}

/*
Ejercicio 9
Escribe un programa que le pida un n�mero al usuario e imprima en la consola si el n�mero si es mayor, menor o igual que 10.

Si el n�mero es menor a 10 debe imprimir "El n�mero es menor que 10".

Si el n�mero es mayor a 10 debe imprimir "El n�mero es mayor que 10".

Si el n�mero es igual a 10 debe imprimir "El n�mero es igual a 10".
*/

var num = parseInt(prompt('Enter a number'));



if(num == 10){

    console.log('El n�mero es igual a 10');

}else if(num > 10){

   console.log('El n�mero es mayor que 10')

}else if(num < 10){

   console.log('El n�mero es menor que 10')

}else{

   console.log('Ingrese un n�mero')

}

/*
Ejercicio 10
El �ndice de masa corporal (IMC), o BMI por sus siglas en ingl�s, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deber� calcular el BMI e imprimir:

"Bajo de peso" si el BMI < 18.5
"Normal" si est� entre 18.5 y 24.9
"Sobrepeso" si est� entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

var peso = parseInt(prompt('Digite su peso'));

var altura = parseInt(prompt('Digite su estatura, ejemplo si es 150cm escribre 1.50'));



imc = peso / (altura*altura);



if(imc < 18.5){

    console.log('Bajo de peso')

}else if(imc > 18.5 && imc <= 24.9){

    console.log('Normal')

}else if(imc > 25 && imc <= 29.9){

    console.log('Sobrepeso')

}else if(imc >= 30){

    console.log('Obeso')

}else{

    console.log('Digite de forma correcta los valores solicitados')

}

/*
Ejercicio 11
Escribe un programa que le pida al usuario ingresar un n�mero.

Si el n�mero es m�ltiplo de 3 debe imprimir en la consola "bing".
Si el n�mero es m�ltiplo de 5 debe imprimir en la consola "bong".
Si el n�mero es m�ltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo n�mero.
*/

var numero = parseInt(prompt('Digite un numero'));


if(numero % 3 == 0 && numero %5 == 0){
    console.log("bingbong");
}else if(numero % 5 == 0){
    console.log("bong");
}else if(numero % 3 == 0){
    console.log("bing");
}else{
    console.log(numero);
}