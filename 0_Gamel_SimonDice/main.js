const btn_inicio = document.getElementById('btn-inicio');
const amarillo = document.getElementById('amarillo');
const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');

const NIVEL_FINAL = 3;

class Juego {
    constructor() {
        this.iniciandoJuego();
        this.secuenciaNumeros();
        setTimeout(() => this.siguienteNivel(), 1000);
        //this.siguienteNivel()
    }

    iniciandoJuego() {
        this.colorElegido = this.colorElegido.bind(this); //apunte a la clase juego y no al DOM
        //btn_inicio.classList.add('ocultar');
        this.cambios_btn_inicio();
        this.colores = { amarillo, azul, rojo, verde } //trae todos los objetos
        this.nivel = 1 //iniciar juego en 1
    }

    cambios_btn_inicio() {
        if (btn_inicio.classList.contains('ocultar')) {
            btn_inicio.classList.remove('ocultar')
        } else {
            btn_inicio.classList.add('ocultar')
        }
    }

    transformarNumeroAColores(numero) {
        switch (numero) {
            case 0:
                return 'amarillo'
            case 1:
                return 'azul'
            case 2:
                return 'rojo'
            case 3:
                return 'verde'
        }
    }

    //metodo para cambiarlos a numeros
    transformarColoresANumeros(color) {
        switch (color) {
            case 'amarillo':
                return 0
            case 'azul':
                return 1
            case 'rojo':
                return 2
            case 'verde':
                return 3
        }
    }

    secuenciaNumeros() {
        this.secuencia = new Array(NIVEL_FINAL).fill(0).map((numero) => { //fill inicializa todo en 0
            return Math.floor(Math.random() * 4) //Genera numeros aleatorios del 0 al 3
        })
    }

    siguienteNivel() {
        this.subnivel = 0
        this.iluminoSecuenciaNumero()
        this.capturarEventos()
    }

    iluminoSecuenciaNumero() {
            for (let i = 0; i < this.nivel; i++) {
                const color = this.transformarNumeroAColores(this.secuencia[i])
                    //console.log(color);
                setTimeout(() => this.iluminarColores(color), 800 * i) //iluminar la secuencia de una en una
                this.iluminarColores(color)
            }
        }
        //metodo
    iluminarColores(color) {
        this.colores[color].classList.add('tenue')
        setTimeout(() => this.apagarColores(color), 300)
    }

    apagarColores(color) {
        this.colores[color].classList.remove('tenue')
    }

    capturarEventos() {
        this.colores.amarillo.addEventListener('click', this.colorElegido)
        this.colores.azul.addEventListener('click', this.colorElegido)
        this.colores.rojo.addEventListener('click', this.colorElegido)
        this.colores.verde.addEventListener('click', this.colorElegido)
    }

    cancelarEventos() {
        this.colores.amarillo.removeEventListener('click', this.colorElegido)
        this.colores.azul.removeEventListener('click', this.colorElegido)
        this.colores.rojo.removeEventListener('click', this.colorElegido)
        this.colores.verde.removeEventListener('click', this.colorElegido)
    }

    colorElegido(ev) {
        const color_identificado = ev.target.dataset.color
        console.log(color_identificado)
        const numero_color = this.transformarColoresANumeros(color_identificado)
        console.log(numero_color);
        this.iluminarColores(color_identificado);
        //Parte logica
        //Click numero que elegio la persona compara === numero aleatorio
        if (numero_color === this.secuencia[this.subnivel]) {
            this.subnivel++; //siguente nivel
            if (this.subnivel === this.nivel) {
                this.nivel++; //pasa al nivel siguiente
                this.cancelarEventos()
                if (this.nivel === NIVEL_FINAL + 1) { //si cantidad niveles llego al final
                    this.ganasteElJuego()
                } else {
                    setTimeout(() => this.siguienteNivel(), 800);
                    //this.siguienteNivel()
                }
            }
        } else {
            this.perdisteElJuego()
        }
    }

    ganasteElJuego() {
        swal("Ganaste el juego", "Que gran memoria tienes, increible!", "success")
            .then(() => this.iniciandoJuego())
    }

    perdisteElJuego() {
        swal("Perdiste el juego", "Sigue ejercitando tu mente!", "error").
        then(() => {
            this.cancelarEventos()
            this.iniciandoJuego()
        });
    }
}

function EmpezarJuego() {
    var juego = new Juego()
}