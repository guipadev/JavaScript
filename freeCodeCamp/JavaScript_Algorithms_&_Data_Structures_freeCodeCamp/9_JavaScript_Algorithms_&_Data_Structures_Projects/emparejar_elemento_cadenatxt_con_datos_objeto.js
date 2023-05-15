//Emparejamiento de ADN
/*
A la cadena de ADN le falta el elemento de emparejamiento. 
Toma cada carácter, obtén su par y devuelve los resultados como un arreglo bidimensional.

Par de bases son un par de AT y CG. Haz coincidir el elemento que falta con el carácter proporcionado.

Devuelve el carácter proporcionado como primer elemento de cada arreglo.

Por ejemplo, la entrada GCG, devolverá [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.
*/

function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}

console.log(pairElement("GCG")) //  [ ["G", "C"], ["C","G"], ["G", "C"] ]