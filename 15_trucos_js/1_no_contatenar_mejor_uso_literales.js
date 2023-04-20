/**
 * 1. Olvídese de la concatenación de cadenas, use una cadena de plantilla 
 * (literal)
 * 
 * Concatenar cadenas usando el + operador para construir una cadena 
 * significativa es de la vieja escuela. 
 * Además, la concatenación de cadenas con valores dinámicos (o expresiones) 
 * podría generar frustraciones y errores.
 */

 let names = 'Charlse';

 let places = 'India';

 let isPrimes = bit => {
   return (bit === 'P' ? 'Prime' : 'Nom-Prime');
 }
 
 // string concatenation using + operator
 let messageConcat = 'Mr. ' + names + ' is from ' + places + '. He is a' + ' ' + isPrimes('P') + ' member.'
 
 /**
  * Los literales de plantilla (o cadenas de plantilla) permiten incrustar 
  * expresiones. 
  * Tiene una sintaxis única en la que la cadena debe estar encerrada por el 
  * acento grave (``). La cadena de plantilla puede contener marcadores de 
  * posición para valores dinámicos. 
  * Estos están marcados con el signo de dólar y llaves (${expresión}).
  * 
  * Aquí hay un ejemplo que lo demuestra:
  */

  let name = 'Charlse';
  let place = 'India';
  let isPrime = bit => {
    return (bit === 'P' ? 'Prime' : 'Nom-Prime');
  }
  
  // using template string
  let messageTemplateStr = `Mr. ${name} is from ${place}. He is a ${isPrime('P')} member.`
  console.log(messageTemplateStr);
  