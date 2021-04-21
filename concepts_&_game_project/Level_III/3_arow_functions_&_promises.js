//AROW FUNCTION
const mercardo = [
    {producto: "Aceite", cantidad:3, precios:12},
    {producto: "Azucar", cantidad:6, precios:45},
    {producto: "Atun", cantidad:2, precios:25},
    {producto: "Pasta", cantidad:8, precios:25}
]

//Obtener la inf. del producto y su precio
const mi_mercado_dos = mercardo.map(({producto, precio})=> console.log(producto, precio))

//PROMISE
const saludar = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Promesa Resuelta :D")
        }else{
            reject("Promesa Fallida :(")
        }
    })
}

saludar()
.then(respuesta => console.log(respuesta))  //true rta resolve
.catch(fallo => console.log(fallo)) //fasle rta reject

