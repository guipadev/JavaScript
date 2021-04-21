/*
No se repite por favor

Devuelve el n�mero de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas. Suponga que todos los caracteres de la cadena proporcionada son �nicos.

Por ejemplo, aab deber�a devolver 2 porque tiene 6 permutaciones totales (aab, aab, aba, aba, baa, baa), pero solo 2 de ellas (aba y aba) no tienen la misma letra (en este caso a) repitiendo.
*/

/*
Explicaci�n del problema
Esta tarea requiere que devolvamos el n�mero de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas. 
Se supone que todos los caracteres de la cadena proporcionada son �nicos. 
Por ejemplo, aab deber�a devolver 2 porque tiene 6 permutaciones totales (aab, aab, aba, aba, baa, baa), pero solo 2 de ellas (aba y aba) no tienen la misma letra
(en este caso a) repitiendo.

Para lograrlo, tendremos que mirar cada posible permutaci�n de una cadena. Hay varias maneras de hacer eso. 
Una pregunta com�n en las entrevistas es la creaci�n de una funci�n que recopile todas las permutaciones de una cadena. 
Hay varios tutoriales disponibles en Internet sobre c�mo hacerlo.

M�todos potenciales utilizados como soluci�n

M�todo recursivo
Esta tarea puede resultar abrumadora incluso despu�s de ver un tutorial. 

Para escribir una soluci�n recursiva, querr� enviar cada nuevo uso de la funci�n tres entradas:

Se est� construyendo una nueva cadena (o matriz de caracteres).

Una posici�n en su nueva cadena que se llenar� a continuaci�n.

Una idea de qu� caracteres (m�s espec�ficamente, posiciones) de la cadena original a�n no se han utilizado.
El pseudoc�digo se ver� as�:
*/
/*
var str = ???;
permAlone (posici�n actual en la cadena original, caracteres usados ??ya en la cadena original, cadena creada) {
  if (la cadena actual est� terminada) {
    imprimir cadena actual;
  } dem�s {
    para (var i = 0; i <str.length; i ++) {
      si (str [i] no se ha utilizado) {
        poner str [i] en la posici�n actual de la nueva cadena;
        marcar str [i] como usado;
        permAlone (posici�n actual en la cadena original, caracteres usados ??ya en la cadena original, cadena creada);
        elimine str [i] como se usa porque otra rama en el �rbol para i + 1 probablemente lo usar�;
      }
    }
  }
}
permAlone (0, nada usado todav�a, nueva cadena vac�a (o matriz del mismo tama�o que str));
*/

/*
Sugerencias
Sugerencia 1
La forma m�s sencilla es utilizar el algoritmo de Heap para obtener de forma recursiva una lista de todas las permutaciones.
Pista 2
Una vez que tenga la lista, simplemente cree una expresi�n regular para capturar los caracteres que se repiten.
Pista 3
Querr� tener las permutaciones como una matriz de cadenas unidas en lugar de caracteres separados.
*/


function permAlone(str) {
  // Crea una expresi�n regular para que coincida con los caracteres consecutivos repetidos.
  var regex = /(.)\1+/;

  // Divida la cadena en una matriz de caracteres.
  var arr = str.split("");
  var permutations = [];
  var tmp;

  // Devuelve 0 si str contiene el mismo car�cter.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  //Funci�n para intercambiar contenido de variables.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Genere matrices de permutaciones utilizando el algoritmo.
  function generate(int) {
    if (int === 1) {
      // Aseg�rate de unir los personajes mientras creamos las matrices de permutaci�n.
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

  // Devuelve cu�ntas no tienen repeticiones.
  return filtered.length;
}

// Ejecuta funcion
permAlone("aab");