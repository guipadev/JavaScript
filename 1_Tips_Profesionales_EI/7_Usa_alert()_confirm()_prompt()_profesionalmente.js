alert('Hello World');

confirm('Estas seguro?');

prompt('Cual es tu nombre');

//UN EJEMPLO
alert('Bienvenido');
const sure = confirm('Deseas que te salude por tu nombre');
if (sure){
    const name = prompt('Cual es tu nombre?');
    alert(`Hola ${name}!!`);
}

//EL MISMO EJEMPLO MAS CORTO
alert('Bienvenido');
if (confirm('Deseas que te salude por tu nombre')){
	alert(`Hola ${prompt('Cual es tu nombre?')}!`);
}

