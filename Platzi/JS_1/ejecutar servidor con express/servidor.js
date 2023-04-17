var cafecito = require("express"); //var que solicita la libreria express
var aplicacion = cafecito(); //var invocar la funcioncion

aplicacion.get("/", inicio); //Se va a dispara cuando arranque la url inicio
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
    resultado.send("Este es el <strong>home</strong> que tal")
}

function cursos(peticion, resultado) {
    resultado.send("Este son los <strong>cursos</strong>")
}

aplicacion.listen(8999); //poner a escuchar el servidor en el puerto 8989

/*
Ubicados en la consola dentro de la carpeta que contiene este archivo ejecutamos
node servidor.js

Para visuallizar en la direcciòn:
http://127.0.0.1:8999/
http://127.0.0.1:8999/cursos

Podemos ingresar desde cualquier dispositivos conectador a la red,
en este momento la ip es 192.168.0.2

Si abrimos en el navegador de otro dispositivo 192.168.0.2:8989
visualizamos el mismo contenido desde local

Ctlr + c detenemos el servidor y podemos hacer cambios y luego ejecutamos nuevamente
*/