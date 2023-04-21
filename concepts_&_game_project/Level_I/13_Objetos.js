/*
Un objeto es basicamente un objeto de la vida real
Persona, un automovil, edificio entre otros

Los objetos poseen propiedades por ejemplo
Persona tiene propiedades como color de ojos, peso, altura, color piel
Persona tiene metodos como hablar, caminar, ver, saltar

var persona = {
	clave1: valor,
	clave2: valor
}
*/

var persona = {
	nombre: "David",
	edad: 27,
	color_ojos: "miel",
	peso: 90
}

console.log(persona);	//muestra todo el objeto persona con sus elementos
console.log(persona.edad);	//muestra la informacion que tiene edad
console.log(`Hola soy ${persona.nombre}, tengo ${persona.edad} años y mi color de ojos son ${persona.color_ojos}, solo peso ${persona.peso} y estoy pesando ${persona.peso} kilogramos`);


//OTRO EJEMPLO DE OBJETO CON FUNCION ADENTRO
var persona = {
	nombre: "David",
	edad: 27,
	color_ojos: "miel",
	peso: 90,
	mensajeNombreOjos: function(){
		return (`Mi nombre es ${this.nombre} y tengo ojos color ${this.color_ojos}`);
	}
}

console.log(`${persona.mensajeNombreOjos()}, tengo solo ${persona.edad} años`);

//Mi nombre es David y tengo ojos color miel, tengo solo 27 años

