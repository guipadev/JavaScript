//TEMPLATE STRING
var apellido = "Torres",
    edad = 26,
    ojos = "marrones",
    camisa = true

console.log(`Hola ${apellido}, su edad es de ${edad}, tienes un ojos color ${ojos}`)

//PODEMOS PONERLE METODOS AL TEMPLATE Y CAMBIAR EL COMPORTAMIENTO DE LA VARIABLE
var apellidos = "Torres",
    edades = 26,
    ojitos = "marrones",
    camisas = true

console.log(`Hola ${apellidos.toUpperCase()}, su edad es de ${edades+10}, tienes un ojos color ${ojitos}`)


//OTRO METODO CONTACTENAR
var person = "Yamid OM"
var mascota = "Luna"
var belleza = "hermosa"

var resulta = person.concat(" tienes un hermoso perro llamado ", mascota, " que es muy ", belleza)

console.log(resulta)

//OTRA FORMA DE CONTACTENAR DEPENDE DEL USO APROPIADO
var saludito = "Hola Bebe"

saludito += " Yamid OM"

console.log(saludito)

//CAPTURAR CIERTAS LETRAS QUE DESEAMOS
//substr(position, cantidad letras a tomar)

var mensaje = "Hola mi queridad comunidad de pilos"

var captura = mensaje.substr(1, 3)

console.log(captura)

//BUSCAR SI EXISTE UNA PALABRA EN CONCRETO EN EL TEMPLATE STRING
var msj = "Hola bienvenido a todos al foro del desarrollo web"

var capturo = msj.includes("foro")

console.log(capturo) //true

//OTRO EJEMPLO DEL includes
var msj = "Hola bienvenido a todos al foro del desarrollo web"

var capturo = msj.includes("de", 37)

console.log(capturo) //false ya que comienza a buscar desde la posicion 37 a pesar de que es "de"

//FORMA MAS FACIL DE OBTENER LOS ELEMENTOS DEL STRING
var msj = "Hola bienvenido a todos al foro del desarrollo web"

console.log(msj[3]) //a