/*********************************************
DECLARAR FUNCION
*********************************************/

function saludo(){
   console.log("Welcome")
}

//Invoca la funcion
console.log(saludo())

//Invocando funcion en un ciclo
for (let i=0; i < 10; i++){
   console.log(saludo())
}


/*********************************************
FUNCIONES ANONIMAS
*********************************************/
//FUNCIONES ANONIMAS NO TIENEN NOMBRE
//NO SE PUEDEN INVOCAR, PERO SE PUEDE ASIGNAR A UNA VARIABLE
/*SE UTILIZA PARA:
-ASIGNAR A UNA VARIABLE
-PASAR COMO ARGUMENTO DE OTRA FUNCION
-RETORNAR DESDE UN FUNCION
-LIMITAR EL ALCANCE DE LAS VARIABLES 
*/

const hola = function(name) {
     return function(){	//retornar otra funcion anonima
     }   
}

hola("wey")


/***********************************************
FUNCIONES CON ARGUMENTO
***********************************************/

function hola(name, age){
   console.log(`hola ${name}, tienes ${age} años`)
}

for (let i=0; i < 10; i++){
   hola("Pedro", i)    		//Se debe colocar los valores de los argumentos declarados en la funcion
}

/***********************************************
FUNCIONES CON ARGUMENTO 2
***********************************************/
const name = prompt("Ingrese su nombre")
hola(name)

function hola(name, age){
   console.log(`hola ${name}, tienes ${age} años`)
}

for (let i=0; i < 10; i++){
   hola(name, i)    		//Se debe colocar los valores de los argumentos declarados en la funcion
}


/*********************************************
FUNCIONES CON RETORNO Y SIN RETORNO
*********************************************/
//Mejor practica que la funcion en lo posible retorne algo(return) y el console.log() se realice por fuera

function hola(name, age){
   return `


hola ${name}, tienes ${age} años`



}

for (let i=0; i < 10; i++){
   console.log(hola("Pedro " + i,  i + 10))  		
}


//IMPRIMIR ARREGLO SIN RETURN

function imprimirArreglo(arreglo){
   for (let i=0; i < arreglo.length; i++){
      console.log(arreglo[i])
   }
}

imprimirArreglo([1, 2, 8, "x", "y"])






