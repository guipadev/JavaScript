//Esto se ejecutaria en la consola del navegador
//Solo se pueden guardar texto

//Guardar un array de numeros en localstorage
let myArrayNumber = [2, 3, 4, 5, 6, 7]

//convertir array a texto
JSON.stringify(myArrayNumber)

//Obtener en una variable el array convertido a texto
let myArrayJson = JSON.stringify(myArrayNumber)

//guardar array en localstorage
localStorage.setItem("myArrayJson", myArrayJson)

//Mostrar la informacion del array
localStorage.getItem("myArrayJson") //"[2, 3, 4, 5, 6, 7]"

//Convertir String nuevamente a JSON
JSON.parse(myArrayJson) //[2, 3, 4, 5, 6, 7]

//Guardar objeto
let myData = {
    name: "Nata",
    surname: "Lozada"
}

//invocar objeto creado
myData // {name: "Nata", surname: "Lozada"}

//Convertir a JSON
let myDataJson = JSON.stringify(myData)

//Invocar objeto convertido a JSON
myDataJson //"{name: "Nata", surname: "Lozada"}"

//Almacenar en local storage
localStorage.setItem("myData", myDataJson)

//Obtener la informacion del local storage
localStorage.getItem("myData") //"{name: "Nata", surname: "Lozada"}"

//CONVERTIR NUEVAMENTE A JSON EL DATO DEL LOCAL STORAGE
let myDataJson2 = localStorage.getItem("myData")
let myData2 = JSON.parse(myDataJson)

myData2 //{name: "Nata", surname: "Lozada"}