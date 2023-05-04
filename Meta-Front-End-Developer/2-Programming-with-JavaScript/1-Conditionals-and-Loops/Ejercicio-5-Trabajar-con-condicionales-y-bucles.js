/**
Ejercicio 1

En este ejercicio, creará el código para un bucle for utilizando la variable de contador denominada i a partir de 1 .

Para hacer que el contador se incremente en 1 en cada ciclo, usará i++ .

La condición de salida para el bucle for debe coincidir con la salida que se muestra a continuación.

Dentro del ciclo, escriba una declaración if-else, que verificará las siguientes condiciones:

Primero, comprobará si el valor de i es 1 . Si es así, su código registrará en la consola la cadena "Medalla de oro".

A continuación, comprobaré si el valor de i es 2 . Si es así, su código registrará en la consola la cadena "Medalla de plata".

Luego, su código verificará si el valor de i es 3 . Si es así, registrará en la consola la cadena "Medalla de bronce".

Para todos los valores restantes de i , su código registrará en la consola solo el valor de i .

Nota: El registro de consola esperado de todo el código debe ser el siguiente.
Medalla de oro Medalla de plata Medalla de bronce 4 5 6 7 8 9 10
 */

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    //this block will run if no condition matches
    console.log(i);
  }
}

/**
Ejercicio 2. Use el código completo de la tarea anterior, pero convierta los condicionales en una declaración de cambio.
Cuando codifica la solución, la salida en la consola debe permanecer exactamente igual que en la pregunta anterior.

Nota : necesitará tres casos separados para las tres medallas y un caso predeterminado para todos los demás valores de la variable i .
 */

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
