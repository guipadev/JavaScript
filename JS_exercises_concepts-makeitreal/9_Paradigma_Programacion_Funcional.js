/***************************************
PROGRAMACION FUNCIONAL
1. Que las funciones se puedan asignar a variables
   (Guardar una variable en una funcio)
2. Que podamos pasar una funcion como argumento de otra funcion
3. Retornar desde otras funciones
****************************************/

//funcion nombrada
function fn(){
    console.log("Hola")
}

//funcion anonima
const fn = function(){
    console.log("Hola")
}

//Asingar funciones a variables

const fn2 = fn

fn()	//Hola
fn2()	//Hola


//Pasar funciones como argumentos

const fn = function(){
   console.log('Hola')
}


function ejecutar(f){
  f()	//Invocamos la funcion
}

//Podemos pasa la funcion con un parametro
ejecutar(fn)	//Pasos la funcion

//Tambien podriamos ejecutar la funcion la funcion anteiror sin parametro
ejecutar(function(){
  console.log("Chao")
})


//Retornar funciones de otras funciones
function retornarfn(){
   return function(){
      console.log("Funcion retornada")
   }
}

//Guardamos en una var la fun retornada
const fnRetornada = retornadafn()
fnRetornada()

//Otro ejemplo de Retornar funciones de otras funciones

function prefijo(p){
   return function(str){
      return p + "-" + str
   }
}

const prefijoAnte = prefijo("ante") //Esta es una funcion retornada
console.log(prefijoAnte("bajo")) //ante-bajo
console.log(prefijoAnte("rior")) //amte-rior

//Otro ejemplo de Retornar funciones de otras funciones
//funcion que se ejecuta despues de cierto tiempo
function delay(time){
   return function(){
      setTimeout(fn, time)
   }
}

const delay1000 = delay(10000)

delay1000(function(){
   console.log("Hola Mundo")	//El hola mundo aparecera despues de 10 seg
})


//Otro ejemplo de Retornar funciones de otras funciones
function unaVez(fn){
   let seEjecuto = false
   return function(){
      if (!seEjecuto){
         fn()
         seEjecuto = true
      }
   }   
}

const inicializar = unaVez(function(){
   console.log("Inicializando aplicacion...")   
})
inicializar()
inicializar()
inicializar()

//METODOS FUNCIONALES EN ARREGLOS
//forEach, filter, map, reduce

// forEach, genera un nuevo arreglo
var arr = [1, 2, 3, 4, 5]

arr.forEach(function(e) {
   console.log(e)
})

// forEach con indice 
var arr = [1, 2, 3, 4, 5]

arr.forEach(function(e, i) {
   console.log(i + ": " + e)
})

// forEach con el modelo flecha que mas compacto
var arr = [1, 2, 3, 4, 5]
arr.forEach((num, i) => console.log(i + ": " + num))

//filter - se utiliza para filtrar elementos, y genera un nuevo arreglo
//en este caso > 3
var arr = [1, 2, 3, 4, 5]

const arrFiltrado = arr.filter(funtion(e){
   return e > 3
})
console.log(arrFiltrado)	//[4, 5]

//filter en formato flecha
var arr = [1, 2, 3, 4, 5]

const arrFiltrado = arr.filter(num => num > 3)
console.log(arrFiltrado)

//map - se utiliza para transformar cada elemento
//crea un nuevo arreglo
var arr = [1, 2, 3, 4, 5]

const arrTransformado = arr.map(function(e){
   return e * 2
})
console.log(arrTransformado) //[2, 4, 6, 8, 10]

//map en formato flecha
var arr = [1, 2, 3, 4, 5]

const arrTransformado = arr.map(num => num * 2)
console.log(arrTransformado)

//reduce
//Reducir o convertir el elemento a un string o número 

var arr = [1, 2, 3, 4, 5]

arr.suma = arr.reduce(function(sum, num){	//sum es un acumulador que siempre debe recibir
   return sum + num			
}, 100)
console.log(suma) //115

//reduce en formato flecha
var arr = [1, 2, 3, 4, 5]

const suma = arr.reduce((sum, num) => sum + num, 0)
console.log(suma)


//palindrome
let newStr = this.replace(/\s/g, '').split("").reverse().join("")
//Esta reemplazando todos los espacios por vacios
//Despues con split esta dividiendo todas las letras en un arreglo
//Se aplica reverse para que quede al contrario las letras
//Despues aplicas con un join para unir los caracteres





