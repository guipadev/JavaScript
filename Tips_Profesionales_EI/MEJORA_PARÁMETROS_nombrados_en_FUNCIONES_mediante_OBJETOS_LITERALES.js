//Esta función no podria escalar, ya que si se le agrega otro parametro en medio rompe
//el contrato de la funcion 

function createGodzilla(color, weight = 200, powers) {
    // ...
}

//Aqui si no queremos pasar weight, obligatoriamente debemos undefined
createGodzilla('blue', undefined, ['lighting'])

//LA FORMA DE SOLUCIONAR ES CON PARAMETRO NOMBRADO
//El contrato donde el nombre del objeto, las propiedades (las keys) 
//Seran las que hagan llegar como parametro a la función

function crearGozilla ({color, material = 'metal', weight = 200, sound, powers}) {
    //Aquí poner lo que queramos que retorne o las operaciones a realizar
    return color
}

//Aquí se debe colocar el parametro indicado como color y luego asignar el valor que queramos
//Inclusive el peso(weight) es opcional
//Y podemos incluir parametro entre el medio, en este caso incluimos 'material' y va a seguir funcionando

//crearGozilla({ color: 'blue', sound: 'GROARRR', powers: ['lighting', 'nuclera bomb']})

//Creamos como objeto
const gozillaParametros = {
    color: 'blue',
    material: 'plastic',
    sound: 'GROARRR', 
    powers: ['lighting', 'nuclera bomb']
}

console.log(crearGozilla(gozillaParametros))

//Aplicarlo a funciones que tengas más de 2 parametro o que va ir evolucionando con el tiempo