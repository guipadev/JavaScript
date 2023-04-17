class Pakiman {

    constructor(nombres, vidas, ataques) {
        this.imagen = new Image();
        
        this.nombre = nombres;
        this.vida = vidas;
        this.ataque = ataques;

        this.imagen.src = imagenes[this.nombre];
    }

    hablar() {
        alert(this.nombre)
    }

    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<br><strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque + "<hr>");
    }

}
