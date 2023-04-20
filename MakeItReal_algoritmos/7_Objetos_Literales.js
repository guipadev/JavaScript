/*
lOS OBJETOS NOS AYUDAN A AGRUPAR INFORMACIÓN PARA RPRESENAR EL MUNDO REAL

UN OBJETO ES UN CONJUNTO DE PROPIEDADES. CADA PROPIEDAD ESTA COMPUESTA POR LLAVE Y VALOR

SE PUEDEN DECLARAR OBJETOS SIN CLASES, SIN DEPENDER DE ESTAS

LOS OBJETOS NO SE ASIGNAR CON = SI NO CON DOS PUNTOS :
*/

/*
var persona = {
   nombre: "Pedro",
   apellido: "Rojas",
   edad: 20,
   estatura: 1.8
}
*/

const persona = {
   nombre: "Heriberto",
   edad: 40,
   activo: true,
   estatura: 1.7,
   hobbies: ["piano", "ajedres"],
   "$-$": "valor"	//ingresa variable con un caracter especial
}

//Obtener todos los valores
console.log(persona)

//Obteniendo un valor
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona["$-$"])

//Agregar nuevas propiedades
persona.hijos = 2

//Agregar nueva propiedad, pero como un string
persona["hijos"] = 2

//modificar propiedades
persona.estatura = 1.8

//eliminar propiedades
deleted persona.hobbies

//Recorrer las propiedades
for (let llave in persona) {	//llave es una variable
   console.log(persona[llave])
}

//Recorrer las propiedades, un dato en especifico
for (let llave in persona) {	//llave es una variable
   console.log(llave)
}

//Recorrer las propiedades, obteniendo todos los valores
//para iterar por un objeto se utiliza in

for (let llave in persona) {	//llave es una variable
   console.log(llave + ": " + persona[llave])
}

//Otra forma de recorrer las propiedades, las imprime como un arreglo
const llaves = Object.keys(persona)

for (let i=0; i< llaves.length; i++){
   const llavecita = llaves[i]
   console.log(persona[llavecita])
}


//otra forma de ejecutar y recorre el anterior
const llaves = Object.keys(persona)

for (let llaves of llaves){
   console.log(person[llave])
}



//Recorrer un arreglo
//para iterar por un arreglo se utiliza of

const arr = ["h", 0, "l", 4]

for (let elemento of arr){
   console.log(elemento)
}

//OBJETOS(METODOS)
//El valor de una propiedad de un objeo puede ser una funcion

const p1 = {
	nombre: "Pedro",
	saludar: function(){
		console.log("Hola!")
	}
}
console.log(p1.saludar())	//Hola!


//OBJETOS(METODOS)
//Los metodos pueden utilizar otras propiedades del objeto utilizando la clave this

const persona = {
	nombre: "Pedro",
	saludar: function(){
		return "Hola, soy " + this.nombre
	}
}

console.log(persona.saludar())	//Hola, soy Pedro

//Pasar un objeto como argumento de una funcion
const p1 = {
	nombre: "Pedro",
	saludar: function(p){
		return "Hola " + p.name + ", soy" + this.nombre
	}
}

const p2 = { name: "Maria" }

console.log(p1.saludar(p2))	//Hola Maria, soy Pedro


//EJERCICIO SABER CUANTAS VECES SE REPITE LA PALABRA

let text = "En la imagen, aparece Villalobos luciendo un atrevido vestido de baño rojo mientras sale de una piscina, algo que puso a suspirar a sus seguidores, que se cautivan con cada una de las publicaciones de la actriz. Como era de esperarse, los seguidores de la colombiana la llenaron de elogios, incluso celebridades como Fanny Lu, Cristina Hurtado y Mabel Moreno no dejaron pasar de largo la sensual imagen tomada por el fotógrafo Roberto Villalobos."

text = text.replace(/\./g, "")	//reemplazar la . por vacio
text = text.replace(/,/g, "")	//reemplazar la , por vacio
text = text.toLowerCase()	//convertir todo en minuscula

const words = text.split(" ")	//separa todas las palbras en comillas
console.log(words)

//verificar cuantas veces se repite las palabras
const freqs = {}
for (let w of words){
	if(freqs[w]){
		freqs[w] += 1
		}else{
			freqs[w] = 1
		}
	}
	
console.log(freqs)




















