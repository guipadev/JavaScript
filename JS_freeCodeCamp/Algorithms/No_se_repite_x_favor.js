/*
No se repite por favor

Devuelve el número de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas. Suponga que todos los caracteres de la cadena proporcionada son únicos.

Por ejemplo, aab debería devolver 2 porque tiene 6 permutaciones totales (aab, aab, aba, aba, baa, baa), pero solo 2 de ellas (aba y aba) no tienen la misma letra (en este caso a) repitiendo.
*/

/*
Explicación del problema
Esta tarea requiere que devolvamos el número de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas. 
Se supone que todos los caracteres de la cadena proporcionada son únicos. 
Por ejemplo, aab debería devolver 2 porque tiene 6 permutaciones totales (aab, aab, aba, aba, baa, baa), pero solo 2 de ellas (aba y aba) no tienen la misma letra
(en este caso a) repitiendo.

Para lograrlo, tendremos que mirar cada posible permutación de una cadena. Hay varias maneras de hacer eso. 
Una pregunta común en las entrevistas es la creación de una función que recopile todas las permutaciones de una cadena. 
Hay varios tutoriales disponibles en Internet sobre cómo hacerlo.

Métodos potenciales utilizados como solución

Método recursivo
Esta tarea puede resultar abrumadora incluso después de ver un tutorial. 

Para escribir una solución recursiva, querrá enviar cada nuevo uso de la función tres entradas:

Se está construyendo una nueva cadena (o matriz de caracteres).

Una posición en su nueva cadena que se llenará a continuación.

Una idea de qué caracteres (más específicamente, posiciones) de la cadena original aún no se han utilizado.
El pseudocódigo se verá así:
*/
/*
var str = ???;
permAlone (posición actual en la cadena original, caracteres usados ??ya en la cadena original, cadena creada) {
  if (la cadena actual está terminada) {
    imprimir cadena actual;
  } demás {
    para (var i = 0; i <str.length; i ++) {
      si (str [i] no se ha utilizado) {
        poner str [i] en la posición actual de la nueva cadena;
        marcar str [i] como usado;
        permAlone (posición actual en la cadena original, caracteres usados ??ya en la cadena original, cadena creada);
        elimine str [i] como se usa porque otra rama en el árbol para i + 1 probablemente lo usará;
      }
    }
  }
}
permAlone (0, nada usado todavía, nueva cadena vacía (o matriz del mismo tamaño que str));
*/

/*
Sugerencias
Sugerencia 1
La forma más sencilla es utilizar el algoritmo de Heap para obtener de forma recursiva una lista de todas las permutaciones.
Pista 2
Una vez que tenga la lista, simplemente cree una expresión regular para capturar los caracteres que se repiten.
Pista 3
Querrá tener las permutaciones como una matriz de cadenas unidas en lugar de caracteres separados.
*/


function permAlone(str) {
  // Crea una expresión regular para que coincida con los caracteres consecutivos repetidos.
  var regex = /(.)\1+/;

  // Divida la cadena en una matriz de caracteres.
  var arr = str.split("");
  var permutations = [];
  var tmp;

  // Devuelve 0 si str contiene el mismo carácter.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  //Función para intercambiar contenido de variables.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Genere matrices de permutaciones utilizando el algoritmo.
  function generate(int) {
    if (int === 1) {
      // Asegúrate de unir los personajes mientras creamos las matrices de permutación.
      permutations.push(arr.join(""));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filtrar la matriz de permutaciones repetidas.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Devuelve cuántas no tienen repeticiones.
  return filtered.length;
}

// Ejecuta funcion
permAlone("aab");