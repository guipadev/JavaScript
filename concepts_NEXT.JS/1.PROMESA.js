//EJEMPLO 1

//Creacion de promesa
const p = new Promise((resolve, reject) => {
    if (x == 10) {
        resolve('La variable es igual a 10');
    } else {
        reject('La variable no es igual a 10')
    }
});

//Llamar la promesa
p
    .then(res => {
        console.log('success' + res);
    })
    .catch(error => {
        console.log('error': +error)
    });

//EJEMPLO 2 USANDO CON OPERACIONES ASINCRONAS
let x = 10;

console.log('1. proceso iniciado...');
setTimeout(() => {
    x = x * 3 + 2;
    console.log('2. proceso terminado...');
}, 2000);

console.log('3. el resultado es: ' + x);

//Anterior ejemplo en promesa
let x = 10;

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        x = x * 3 + 2;
        console.log('2. proceso terminado...');
        resolve(x);
    }, 2000);
});

console.log('1. proceso iniciado...');

//Ejecutar promesa, primero se ejecuta y luego da a conocer el valor de res
promesa.then(res => {
    console.log('3. el resultado es: ' + res);
});

//EJEMPLO 3, PROMESAS CONSECUTIVAS
let usuarios = [{
        id: 1,
        nomre: 'Marc'
    },
    {
        id: 2,
        nomre: 'Lena'
    }
];

let telefonos = [{
        id: 1,
        telefono: 123345678
    },
    {
        id: 2,
        telefono: 87654321
    }
];

//funcion de tipo promesa y como devolver un resultado tipo promesa
const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if (usuarios.find(usuario => usuario.id === id)) {
            console.log('El usuario existe!');
            resolve(obtenerTelefono(id)); //nueva promesa obtener telefono
        } else {
            reject('El usuario no existe');
        }
    });
};

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if (telefonos.find(telefono => telefono.id === id)) {
            resolve('El telefono existe!');
        } else {
            reject('El telefono no existe');
        }
    });
};

//Llamar las funciones 
obtenerUsuario(2)
    .then(res => {
        return res; //El usuario existe! 
    })
    .then(mensaje => {
        console.log(mensaje); //El telefono existe!
    })
    .catch(error => {
        console.log(error);
    });