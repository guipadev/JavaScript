/*
Instrucciones
Tarea 1: codificar una declaración de función
Debe codificar una declaración de función denominada  addTwoNums, que acepte los números  a  y  b  
y la consola registre  a + b.

Tarea 2: invocar la  función addTwoNums  con un número y una cadena
Debe invocar  addTwoNums  usando los siguientes argumentos:  5  y  "5" .

Tarea 3: actualizar la  función addTwoNums  con un bloque try...catch
Agregue los bloques try y catch dentro del cuerpo de la definición de la función. 
Por ahora, solo asegúrese de que el registro de la consola de  a + b  esté dentro
del bloque de prueba. 
Además, el  bloque catch  debe detectar un error llamado  err y, dentro del cuerpo del  bloque catch, 
debe registrar en la consola el  valor de err.

Tarea 4: Si los argumentos pasados ​​no son números, genera un error
Si alguno de los argumentos pasados ​​a  addTwoNums  no son números, arrojará un error.

Específicamente, codifique un condicional con la siguiente lógica:

si el  tipo  del  parámetro a  no es igual a  'number' , lanza un nuevo  ReferenceError. 
Dentro de  ReferenceError , pase un mensaje de error personalizado de  'el primer argumento no es un número'.

de lo contrario, si el  tipo  del  parámetro b  no es igual a  'number' , arroja un nuevo  ReferenceError. 
Dentro de  ReferenceError , pase un mensaje de error personalizado de  'el segundo argumento no es un número'.

de lo contrario, registro de consola  a + b  

Una vez que haya completado esta tarea, todo el código dentro del  bloque de prueba  estará dentro de estas 
declaraciones condicionales.

Tarea 5: actualizar el bloque catch
Dentro del bloque catch, actualice el código de  console.log(err)  a  console.log("Error!", err).

Tarea 6: invocar la   función addTwoNums
Invoque la   función  addTwoNums usando 5  y  "5"  como argumentos.

Tarea 7: agregar otro registro de consola bajo la   invocación de la función addTwoNums
Agregue otra línea de código que la consola registre la cadena  "Todavía funciona".
*/

// Tarea 1
function addTwoNums(a, b) {
  console.log(a + b);
}

// Tarea 2
addTwoNums(5, "5"); // "55"

// Tarea 3
function addTwoNums(a, b) {
  try {
    console.log(a + b);
  } catch (err) {
    console.log(err);
  }
}

// Tarea 4
function addTwoNums(a, b) {
  if (typeof a !== "number") {
    throw new ReferenceError("the first argument is not a number");
  } else if (typeof b !== "number") {
    throw new ReferenceError("the second argument is not a number");
  } else {
    console.log(a + b);
  }
}

// Tarea 5
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}

// Tarea 6
addTwoNums(5, "5");

// Tarea 7
addTwoNums(5, "5");
console.log("It still works");
