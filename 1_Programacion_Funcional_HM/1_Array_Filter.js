//Crear un arreglo de igual o menor cantidad de elementos del arreglo con el que estamos trabajando inicialmente
//El arreglo inicial es inmutable y por ende no surte ningun cambio de estado
//Ejemplo vamos a buscar los datos a una API o BD, en los dos casos vamos a encontrar arreglos muy grandes, entonces filter nos va a permitir obtener uno de menor tamaño, ya que nosostros deseamos quedarnos con solo una parte del arreglo, dando un nuevo arreglo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mascotas = [
    { nombre: 'Puchini', edad: 10, raza: 'perro' },
    { nombre: 'Chancho', edad: 9, raza: 'perro' },
    { nombre: 'Pulga', edad: 7, raza: 'perro' },
    { nombre: 'Peluza', edad: 15, raza: 'gato' }
];

//Ejemplo de uso de filter

//Devolver nuevo array con # menores a 5
const numerosFiltrados = numeros.filter(numerito => numerito < 5);
console.log(numerosFiltrados); //[1, 2, 3, 4]

//Devolver nuevo array con la raza perros
const perros = mascotas.filter(tipo => tipo.raza == 'perro');
console.log(perros);

//Devolver nuevo array con la raza gatos
const gatos = mascotas.filter(tipo => tipo.raza == 'gato');
console.log(gatos);