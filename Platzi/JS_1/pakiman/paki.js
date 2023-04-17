//Tambien se puede escribir de esta manera
/*
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
*/

let imagenes = {
    Cauchin: "vaca.png",
    Pokacho: "pollo.png",
    Tocinauro: "cerdo.png"
}

/*
var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
*/

//Otra forma de realizar el codigo mas corto y ejecutar menos la funcion
let coleccionPokemones = [];

coleccionPokemones.push(new Pakiman("Cauchin", 100, 30));
coleccionPokemones.push(new Pakiman("Pokacho", 80, 50));
coleccionPokemones.push(new Pakiman("Tocinauro", 120, 40));

//Forma de recorrer y mostrar
for (let personaje of coleccionPokemones) {
    personaje.mostrar();
}
