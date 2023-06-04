/*
La programación defensiva se trata de asumir que todos los argumentos que recibirá una función 
son del tipo incorrecto, el valor incorrecto o ambos.

En otras palabras, asume que las cosas saldrán mal y es proactivo al pensar en tales escenarios antes 
de que sucedan, para que sea menos probable que su función cause errores debido a entradas defectuosas.

¿Cómo refactorizaría entonces la función dada a continuación teniendo en cuenta la programación defensiva?

Para este ejercicio, asegurémonos de que los dos argumentos que se pasan satisfagan los siguientes criterios:

La longitud del parámetro de palabra no puede ser inferior a 2 .

La longitud del parámetro de coincidencia debe ser 1 .

El tipo de la palabra y los parámetros de coincidencia deben ser string .

Utilizará el siguiente código para completar su tarea:

function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

Aquí están las tareas para completar:

1. Justo encima del bucle for en la definición de la función letterFinder, declare una variable llamada condition1 
y asígnele el siguiente código: typeof(word) == 'string' && word.length >= 2 .

2. Declare una variable llamada condition2 en la línea siguiente y asígnele una verificación que asegure que el tipo 
de coincidencia es una cadena Y que la longitud de la variable de coincidencia es igual a 1 .

3. Escriba una declaración if en la siguiente línea que verifique que condition1 sea verdadera y condition2 sea verdadera

4. Mueve el resto del cuerpo de la función a la instrucción if que escribiste en el paso anterior.

5. Codifique un bloque "else" después de la condición "if" y console.log lo siguiente: 
"Please pass correct arguments to the function.".

6. Como prueba fallida, ejecute la función letterFinder y pásela con dos números cualesquiera como argumentos.

7. Como prueba de aprobación, ejecute la función letterFinder y pásela con los argumentos correctos, como: 
letterFinder("cat", "c") .
*/

function letterFinder(word, match) {
  //si la palabra es una cadena y la longitud es mayor o igual a 2
  const condition1 = typeof word === "string" && word.length >= 2;

  //si la coincidencia es una cadena y la longitud es igual a 1
  const condition2 = typeof match === "string" && match.length === 1;

  if (condition1 && condition2) {
    // //si ambas condiciones coinciden
    for (let i = 0; i < word.length; i++) {
      if (word[i] === match) {
        // verifique si el carácter en esta posición i en la palabra es igual a la coincidencia
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    // Si los requisitos no coinciden
    console.log("Please pass correct arguments to the function.");
  }
}

// Prueba fallida con dos números
letterFinder(123, 4);
letterFinder([], []);

// Prueba de aprobación con argumentos correctos
letterFinder("cat", "c");
