//BASADO EN EL ANTERIOR EJEMPLO 3 DE PROMESAS, PERO UTILIZANDO CALLBACK
//PARA MOSTRAR QUE NOS IMPOSIBILITA LEGIBIDAD DEL CODIGO Y COLOCAR FUNCION ENTRE FUNCIONES
//POR LO CUAL ES MEJOR PROMESAS CON VARIAS OPERACIONES ASINCRONAS

const usuarios = [{
    id: 1,
    nomre: 'Marc'
}, {
    id: 2,
    nomre: 'Lena'
}];

const telefonos = [{
        id: 1,
        telefono: 123345678
    },
    {
        id: 2,
        telefono: 87654321
    }
];

const edades = [{
        id: 1,
        edad: 10
    },
    {
        id: 2,
        edad: 20
    },
]

//Obtener callback
//funciones que se ejecutan despues de mi funcion principal
const obtenerUsuario = (id, callback, error) => { //Implica colocar callback y error
    if (usuarios.find(usuario => usuario.id === id)) {
        console.log('El usuario existe!');
        //callback
        callback(id);
    } else {
        //error
        error('El usuario no existe');
    }
};

const obtenerTelefono = (id, callback, error) => {
    if (telefonos.find(telefono => telefono.id === id)) {
        console.log('El telefono existe!');
        //callback
        callback(id);
    } else {
        //error
        error('El teléfono no existe');
    }
}

const obtenerEdad = (id, callback, error) => {
    const edad = edades.find(edad => edad.id === id);
    if (edad) {
        //callback
        callback('El usuario tiene ' + edad.edad + ' años')
    } else {
        //error
        error('No se encontrò la edad');
    }
};

//Llamar callback 
obtenerUsuario(2, id => {
    //Siguiente función
    obtenerTelefono(id, resTelefono => {
        //seguir mi código
        obtenerEdad(resTelefono, resEdad => {}, errorEdad => {
            console.log(resTelefono);
        }, errorEdad => {
            console.error(errorEdad);
        });
    }, errorTelefono => {
        console.err(errorTelefono);
    });
}, error => {
    console.log(error);
});