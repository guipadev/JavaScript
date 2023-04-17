var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d"); //Metodo dibujar en canvas 2D


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath(); //Arrancar un trazo
    lienzo.strokeStyle = color; //Linea color
    lienzo.moveTo(xinicial, yinicial); //mover el lapiz donde va empezar a dibujar posicion X
    lienzo.lineTo(xfinal, yfinal); //posicion Y
    lienzo.stroke(); //Dibuja linea
    lienzo.closePath(); //Cierra trazo
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;


    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
    }

    dibujarLinea(colorcito, 1, 1.1, 300);
    dibujarLinea(colorcito, 1, 300, 300, 300);
}



/*CICLO WHILE
	while (l < lineas) {
        yi = 10 * l;
        xf = 10 * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        l++;
    }
	*/