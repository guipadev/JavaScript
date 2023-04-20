//OBTENER LONGITUD DEL ARREGLO

const arr = [1, "Pedro", true, [2, "Juan"]]

//Obtener la longitud - se utiliza lengt

console.log("Longitud: ", arr.length)

//Obtener el valor de una posiciòn

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[arr.length - 1])

//Otras formas de obtener la posicion

const arr2 = arr[3]

arr[3][0]

//RECORRER Y REEMPLAZAR

const arr = [1, "Pedro", true, [2, "Juan"]]  
  
  // recorrer un arreglo
    // i=1
    // arr.length = 4
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }

    // reemplazar elementos
    arr[2] = false
    console.log(arr)

//INSERTAR ELEMENTOS

//Insertar nuevos elementos al final del arreglo
    const arr = [1, "Pedro", true, [2, "Juan"]]
    arr.push("German")
    arr.push("David")
    console.log(arr)

//ELIMINAR ELEMENTOS DEL ARREGLO

    const arr = [1, "Pedro", true, [2, "Juan"]]
    arr.splice(1, 1)
    console.log(arr)

//Eliminar e ingresar un nuevo elemento al mismo tiempo

    const arr = [1, "Pedro", true, [2, "Juan"]]
    arr.splice(1, 1, "Alicia")
    console.log(arr)

//SELECCIONAR POSICION DEL ARREGLO

const arr = [1, "Pedro", true, [2, "Juan"]]  

//arreglo dentro de arreglos (matrices)
    const mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    //seleccionar una posicion de la matriz
    //Elegir el numero 4
    mat[1][1]

//CICLO FOR EN ARREGLO

const mat = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
] 

 //Mostrar informacion de la matriz con un ciclo

    //i=0
    //mat.length = 3
    //j=0
    //mat[1].length = 3

    for (let i=0; i < mat.length; i++){
        for ( let j=0; j < mat[i].length; j++){
            console.log(mat[i][j]) //mat [0][0]
        }
    }


 //INSERTAR ELEMENTO EN POSICION ESPECIFICA

    const arr = [1, "Pedro", true, [2, "Juan"]]
    arr.splice(1, 0, "Alicia")
    console.log(arr)

//UNIR UN ARREGLO EN CADENA(string)

const arr = [1, 2, 3, 4, 5]
console.log(arr.join("-"))  //join sirve para poner separador, si lo dejas vacio, coloca ,

//Vamos a ser el mismo metodo pero manual
let str = ""
for (let i=0; i < arr.length; i++){
  str += arr[i]
  if (i < arr.length - 1){
    str += "-"
  }
}
console.log(str)

//BUSCAR LA POSICION DE UN ELEMENTO

const arr = [1, 2, 3, 4, 5, 4]
console.log(arr.indexOf(4)) //busca el elemento en posicion 4, y el # ejemplo (4, 4) daria 5

//esta la opcion para buscar el ultimo que seria lastIndexOf

//Realizar el mismo resultado de forma manual seria:

for (let i=0; i < arr.length; i++) {
  if (arr[i] == 4) {
    console.log(i)
    break
  }
}
