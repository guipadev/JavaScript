var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado); //detecta tecla cuando preisonas y levantas

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red",149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color; //Linea color
    lienzo.lineWidth = 3; //ancho de la linea 3px
    lienzo.moveTo(xinicial, yinicial); //mover el lapiz donde va empezar a dibujar posicion X
    lienzo.lineTo(xfinal, yfinal); //posicion Y
    lienzo.stroke(); //Dibuja linea
    lienzo.closePath(); //Cierra trazo
}

function dibujarTeclado(evento) {
    var colorcito = "green";
    var movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
        console.log('Otra tecla');
            break;
    }
}