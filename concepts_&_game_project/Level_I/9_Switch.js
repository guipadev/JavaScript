/*
Estructura de control para determinar alguna decisión
Comparando el valor que posee la expresion que evalua con las instancia que posee

switch(expresion){
	case valor1:
	declaraciones;
	breack;

	default:
	declaracion;
}
*/

//EXAMPLE

var numero = 30;

switch(numero){
    case 'ave':
    console.log('es un ave');
    break;

    case 30:
    console.log('enontre el numero '+numero);
    break;

    defaul:
    console.log('valor invalido');
}

// enontre el numero 3


//EJEMPLO DE LA IMPORTANCIA DEL BREAK

var numero = 30;

switch(numero){
    case 'ave':
    console.log('es un ave');
    break;

    case 30:
    console.log('enontre el numero '+numero);
    
    case marron:
    console.log('color marron');

    case 23:
    console.log('numero 23 no deberia imprimir');

    defaul:
    console.log('valor invalido');
}

// Encontre el numero 30
// color marron
// numero 23 no deberia imprimir
// valor invalido


//EJEMPLO DE ESCRIBIR COLO Y TRADUCIRLO A INGLES
//toLowerCase(); convierte el texto ingresado a minuscula

var color = prompt('Dime tu color').toLowerCase();

switch(color){
    case 'azul':
    alert('blue');
    break;

    case 'rojo':
    alert('red');
    break;

    case 'negro':
    alert('black');
    break;

    default:
    alert('Aun no me se ese color');
}