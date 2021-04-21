//Nos permite transformar los metodos de un arreglo, donde el metodo map va a tomar una cantidad determinada y nos va a entregar un nuevo arreglo con la misma cantidad que el inicial, pero con todos los elementos modificados, de acuerdo a la funcion que se aplico

//funcion de suma total
const suma = (x) => {
    let acumulado = 0;
    for (i = 0; i < x.length; i++) {
        acumulado += x[i];
    }
    return acumulado;
}


const numeros = [1, 2, 3, 4, 5]

const mascotas = [
    { nombre: 'Puchini', edad: 10, raza: 'perro' },
    { nombre: 'Chancho', edad: 9, raza: 'perro' },
    { nombre: 'Pulga', edad: 7, raza: 'perro' },
    { nombre: 'Peluza', edad: 15, raza: 'gato' }
];

//Ejemplo de uso de map

//Devolver nuevo array los elementos modificados
const multiplicados = numeros.map(numerito => numerito * 2);
console.log(multiplicados); //[2, 4, 6, 8, 10]

//Devolver nuevo array con parejas
const parejas = numeros.map(numerito => [numerito, numerito]);
console.log(parejas); //[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]

//Devolver nuevo array con las edad promedio de las mascotas
//Obtenemos primero las edades
const edades = mascotas.map(numeros => numeros.edad);
//Sumamos las edades obtenidas
const resultado = suma(edades);
//Obtenemos el promedio anterior
console.log(resultado / edades.length); //10.25