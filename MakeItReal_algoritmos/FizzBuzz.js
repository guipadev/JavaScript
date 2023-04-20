/*
FizzBuzz
Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con
dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para
números divisibles en 5 (y no 3), imprime "Buzz" en su lugar.
*/

for (let numero = 1; numero<= 100; numero++) {
  let output = "";
  if (numero % 3 == 0) output += "Fizz";
  if (numero % 5 == 0) output += "Buzz";
  console.log(output || n);
}