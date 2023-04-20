//Unión ordenada
/*
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo 
el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, 
pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, 
pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.
*/

function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }

    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))   //  [1, 3, 2, 5, 4]