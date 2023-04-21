/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

const letter = "bici coche (balón) bici coche peluche" // -> ✅
const letter2 = "(muñeca) consola bici" // ✅
const letter3 = "bici coche (balón bici coche" // -> ❌
const letter4 ="peluche (bici [coche) bici coche balón" // -> ❌
const letter5 ="(peluche {) bici" // -> ❌
const letter6 ="() bici" // ❌


const isValid = (letter) => {

    let parentisis = 0;
    let resultado = false;

    letter.split("").map(letra => {
        if( letra === "(" ) parentisis++
        if( letra > 1 ) return false
        if( letra === ")" ) parentisis--
    })

    letter.split(' ').map(palabra => {
        if(parentisis === 0 && palabra.includes("(") && palabra.includes(")")){
            resultado = true

            if(palabra.includes("{") || palabra.includes("}") || palabra.includes("]") || palabra.length === 2) {
                resultado = false
            }
        }
    })


    return resultado
}

console.log(isValid(letter))
console.log(isValid(letter2))
console.log(isValid(letter3))
console.log(isValid(letter4))
console.log(isValid(letter5))
console.log(isValid(letter6))