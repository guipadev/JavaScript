/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]
  
Al ejecutar el método debería devolver lo siguiente:
  
const ovejasFiltradas = contarOvejas(ovejas)
  
console.log(ovejasFiltradas)
  
[{ name: 'Navidad', color: 'rojo' },
 { name: 'Ki Na Ma', color: 'rojo' }]
  
*/

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
]

//Primera Opción
function contarOvejas(ovejas) {
    return ovejas.filter(oveja => {
        const {name, color} = oveja
        const lowerCaNa = name.toLowerCase()
        return color === 'rojo' && lowerCaNa.includes('n') && lowerCaNa.includes('a')
    }) 
}
    
//Segunda Opción
function contarOvejas2(ovejas) {
    return ovejas
        .filter(o => o.color === 'rojo' && o.name.includes('a') || o.name.includes('n')
    )
} 

//Tercera Opción
const filtrarOvejas = (obje, letraUno, letraDos, color) => {

    const filtro = obje.filter(oveja => {

        oveja.name = oveja.name.toLowerCase()   //pasar a minuscula todas las letras
        
        if(
            oveja.name.includes(letraUno) &&
            oveja.name.includes(letraDos) &&
            oveja.color.includes(color)
        ){
            return oveja
        }
    })
    return filtro
}

//Ejecutando los resultados
console.log(contarOvejas(ovejas))
console.log(contarOvejas2(ovejas))
console.log(filtrarOvejas(ovejas, 'a', 'n', 'rojo'))