//Recibe dos argumentos, el primero es un valor que esta haciendo acumulado y el segundo es el elemento que se esta interando en el arreglo
//Esta funcion regresa el nuevo elemento que se va estar acumulando

/*El metodo array reduce recibe una funcion reduce
Que recibe como primer elemento el acumulador y el segundo elemento el que se esta iterando
y esta funcion debe devolver el nuevo acumulador que se va a pasar como argumento la siguiente vez que se llame la funcio reduce

(acc, el) => nuevoAcc

Ademas de esto el metodo reduce, recibe como segundo argumento que va a ser el valor inicial que va a tener nuestro acumulador

reduce(reducer, inicial)
*/


//ejemplo funcion reducer
//const reducer = (acumulado, valorActualIterado) => nuevoAcumulador

const reducido = [1, 2].reduce((acc, el) => acc + el, 0)
console.log(reducido) //3

const numeros = [1, 2, 3, 4, 5]
    //Forma correcta obtener la suma de todos los elementos de un arreglos
const resultado = numeros.reduce((acc, el) => acc + el, 0)
console.log(resultado) //15

//Ejemplo de indexar con reduce
const mascotas = [
    { nombre: 'Puchini', edad: 10, raza: 'perro' },
    { nombre: 'Chancho', edad: 9, raza: 'perro' },
    { nombre: 'Pulga', edad: 7, raza: 'perro' },
    { nombre: 'Peluza', edad: 15, raza: 'gato' }
];

//indexando con reduce
const indexed = mascotas.reduce((acc, el) => ({ //devolver un objeto
    ...acc, //objeto sera la copia del acumulador
    [el.nombre]: el, //arreglo indexado por el nombre de la mascota
}), {})

console.log(indexed) //un objeto indexado por el nombre de la mascota
console.log(indexed, ['Peluza']) //Obtendremos el objeto de peluza

//Transformar a un arreglo plano, osea obtener [1,2,3,4,5]
const aidado = [1, [2, 3], 4, [5]]

const plano = anidado.reduce((acc, el) => acc.concat(el), [])
console.log('plano'); //[1,2,3,4,5]