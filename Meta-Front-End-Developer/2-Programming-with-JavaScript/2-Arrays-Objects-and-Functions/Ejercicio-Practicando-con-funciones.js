/*
Tarea 1:
Escriba una función llamada letterFinder que acepte dos parámetros: word y match .

Tarea 2:
Codifique un bucle 'for' dentro del cuerpo de la función. 
El contador del bucle for debe comenzar en cero, incrementarse en 1 en cada iteración y salir 
cuando el valor de la variable del contador sea igual a la longitud del parámetro de la palabra .

Tarea 3:
Agregue una declaración if dentro del bucle for cuya condición funcione de la siguiente manera:

Acceda a cada una de las letras dentro de la palabra pasada usando la variable contador, con palabra[i] .

Compruebe si la palabra actual [i] es igual al valor de match .

Tarea 4:
console.log lo siguiente dentro del cuerpo de la declaración if: console.log('Found the', match, 'at', i).

Tarea 5:
Escribe la condición else. Aquí solo registrará en la consola lo siguiente: console.log('---No se encontró ninguna coincidencia en', i).

Tarea 6:
Llame al buscador de letras y páselo como primer argumento como la cadena "prueba" y como segundo argumento, 
la cadena "t".

Su salida debe ser la siguiente:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3
*/

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");
