/*
Actualización de inventario

Compare y actualice el inventario almacenado en una matriz 2D con una segunda matriz 2D de una entrega nueva. Actualice las cantidades actuales de artículos de inventario existentes (en arr1). 
Si no se puede encontrar un artículo, agregue el nuevo artículo y la cantidad en la matriz de inventario. 
La matriz de inventario devuelta debe estar en orden alfabético por artículo.
*/

/*
Sugerencias
Sugerencia 1
Debe analizar cada elemento del nuevo inventario para ver si existe en el inventario actual o no. 
Recuerde que el nombre del producto se almacena como el segundo elemento de cada submatriz: 
array [0] [1] = "item-name".

Pista 2
Si el artículo existe, debe agregar la cantidad del nuevo inventario. 
Si el artículo no existe, debe agregarlo por completo.

Pista 3
Devuelva el inventario completo en orden alfabético.
*/

function updateInventory(arr1, arr2) {
   //convertir el inventario actual (arr1) en una matriz unidimensional
  const inventory = Array.prototype.concat.apply([], arr1);

  //Recorrer la nueva entrega (arr2)
  for (let i = 0; i < arr2.length; i++) {
    //Extraer las propiedades del artículo para una fácil referencia
    const item = arr2[i][1];
    const quantity = arr2[i][0];

    //Comprobar si el artículo ya existe en el inventario
    const position = inventory.indexOf(item);

    // Artículo existente: actualizar cantidad
    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
      continue;
    }

    //elemento alienígena: agregar al inventario
    arr1.push([quantity, item]);
  }

  //Ordenar el inventario en orden alfabético
  arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));

  return arr1;
}


// Ejemplos de listas de inventario
var inventarioActual= [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var nuevoInventario= [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(inventarioActual, nuevoInventario);