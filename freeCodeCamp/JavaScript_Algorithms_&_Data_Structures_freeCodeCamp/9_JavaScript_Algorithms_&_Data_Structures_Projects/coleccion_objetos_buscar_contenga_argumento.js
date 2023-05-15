//Donde estás

/*
Crea una función que busque a través de un arreglo de objetos (primer argumento) 
y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). 
Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección 
si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
y el segundo argumento es 
{ last: "Capulet" }, 
entonces debes devolver el tercer objeto del arreglo (el primer argumento), 
porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.
*/

function whatIsInAName(collection, source) {
    
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))    // [{ first: "Tybalt", last: "Capulet" }]