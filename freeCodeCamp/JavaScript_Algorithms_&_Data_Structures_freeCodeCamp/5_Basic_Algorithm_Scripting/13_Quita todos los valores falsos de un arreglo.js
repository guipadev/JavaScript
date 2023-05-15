/*
Rebote falsy

Quita todos los valores falsos de un arreglo.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.
*/

function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9])) // [7, 'ate', 9] 

// Solution two
function bouncer2(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}