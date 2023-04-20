/***********************************************
FUNCIONES CON FLECHAS ARROW FUNCTIONS
***********************************************/
//NUEVA FORMA DE DECLARAR FUNCIONES
//LA FUNCION FLECHA, TRATA LA FUNCION COMO UNA VARIABLE

const name = prompt("Ingrese su nombre")
hola(name)

const hola = (name, age) => {
   return `hola ${name}, tienes ${age} años`
}

//Si se tiene un solo argumento se puede obvioar los parentisis ()

const hola = (name, age) => {
   return `hola ${name}, tienes ${age} años`
}

for (let i=0; i < 10; i++){
   console.log(hola("Pedro " + i, i + 10))  		
}

//Y si tiene solo una linea de codigo puede obviar los corchetes {} y parentisis (). Quedando todo en una sola linea y el automaticamente declara el return

const hola = name => `hola ${name}, numero años`




for (let i=0; i < 10; i++){

   console.log(hola("Pedro" + i, i + 10))
}
