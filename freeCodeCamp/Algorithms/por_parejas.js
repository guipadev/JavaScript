/*
Por parejas

Dado un arreglo arr, busque pares de elementos cuya suma sea igual al segundo argumento arg y devuelva la suma de sus �ndices.

Puede utilizar varios pares que tengan los mismos elementos num�ricos pero diferentes �ndices. Cada par debe utilizar los �ndices disponibles m�s bajos posibles. Una vez que se ha utilizado un elemento, no se puede reutilizar para emparejarlo con otro elemento. Por ejemplo, por pares ([1, 1, 2], 3) crea un par [2, 1] usando el 1 en el �ndice 0 en lugar del 1 en el �ndice 1, porque 0 + 2 <1 + 2.

Por ejemplo, por pares ([7, 9, 11, 13, 15], 20) devuelve 6. Los pares que suman 20 son [7, 13] y [9, 11]. Luego podemos escribir la matriz con sus �ndices y valores.

Index	0	1	2	3	4
Value	7	9	11	13	15

A continuaci�n, tomaremos sus �ndices correspondientes y los agregaremos.

7 + 13 = 20 ? �ndices 0 + 3 = 3
9 + 11 = 20 ? �ndices 1 + 2 = 3
3 + 3 = 6 ? Devolver 6
*/

function pairwise(arr, arg) {
  let pairIndices = [];
  // Check every pair
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Exclude pairs that contain previously paired elements
      if (arr[i] + arr[j] == arg
          && !pairIndices.includes(i)
          && !pairIndices.includes(j)) {
        pairIndices.push(i, j);
        break;
      }
    }
  }

  return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
}

pairwise([1,4,2,3,0,5], 7);  //11