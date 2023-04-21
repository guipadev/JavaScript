const tieneAdeudado = false;

let user = null

if (tieneAdeudado) {
    user = {
        name: 'Eduardo',
        age: 20,
        debt: 1500
    }
} else {
    user = {
        name: 'Eduardo',
        age: 20
    }
}

console.log(user)

/**********************************************************************/
//Mejor opción con speade operation

const tieneAdeudado = false;

let user = {
    name: 'Eduardo',
    age: 20,
    ...(tieneAdeudado && {debt: 1500})
};

console.log(user);

/**********************************************************************/
//Primer opción de mejora

const tieneAdeudado = false;

let user = {
    name: 'Eduardo',
    age: 20
}

if(tieneAdeudado) {
    debt: 1500;
}

console.log(user)

/**********************************************************************/
//Segunda opción de mejora, operador ternario

const tieneAdeudado = false;

let user = (tieneAdeudado) ?
    {
        name: 'Eduardo',
        age: 20,
        debt: 1500
    }:
    {
        name: 'Eduardo',
        age: 20
    };

console.log(user)

/**********************************************************************/
//Tercera opción de mejora, operador ternario
