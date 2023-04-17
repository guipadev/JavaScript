const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");


const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);


const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataque-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataque-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")
const botonReiniciar = document.getElementById("boton-reiniciar");

// Canvas
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

// var globales
let jugadorId = null
let enemigoId = null
let inputHipodoge
let inputCapipeo 
let inputRatigueya
let ataqueEnemigo = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let mascotaJugador
let mascotaJugadorObjeto
let opcionDeMokepones
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugador = []
// Arreglo donde tendra los objetos
let mokepones = []
let botones = []
let mokeponesEnemigos = []

let lienzo = mapa.getContext("2d")
let intervalo

// fondo juego
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.webp'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20

const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

// Creación de Clase y Objeto Mokepon
class Mokepon {
  constructor(nombre, foto, vida, fotoMapa, id = null) {
    this.id = id
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.ancho = 40
    this.alto = 40
    this.x = aleatorio(0, mapa.width - this.ancho)
    this.y = aleatorio(0, mapa.height - this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }

  pintarMokepon() {
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    )
  }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.webp')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.png')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.webp')

// Enemigos
// let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.webp')
// let capipepoEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.png')
// let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.webp')

const HIPODOGE_ATAQUES = [
  { nombre: '🌊', id: 'boton-agua' },
  { nombre: '🌊', id: 'boton-agua' },
  { nombre: '🌊', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🪨', id: 'boton-tierra' },
]

// Agregar valores al ataque arreglo por medio objeto literal
hipodoge.ataques.push(...HIPODOGE_ATAQUES)
// hipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
  { nombre: '🪨', id: 'boton-tierra' },
  { nombre: '🪨', id: 'boton-tierra' },
  { nombre: '🪨', id: 'boton-tierra' },
  { nombre: '🌊', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
]

capipepo.ataques.push(...CAPIPEPO_ATAQUES)
// capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌊', id: 'boton-agua' },
  { nombre: '🪨', id: 'boton-tierra' },
]

ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
// ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

// Agregar valores al arreglo
mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionReiniciar.style.display = "none";
  sectionVerMapa.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-de-pokepon" for=${mokepon.nombre}>
      <p>${mokepon.nombre}</p>
      <img src=${mokepon.foto} alt=${mokepon.nombre} />
    </label>
    `

    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipeo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  })

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  
  botonReiniciar.addEventListener("click", reiniciarJuego);

  unirseAlJuego()
}

function unirseAlJuego() {
  fetch("http://debian.localhost:8080/unirse")
    .then(function (res) {
      if (res.ok) {
        res
          .text()
          .then(function (respuesta) {
            console.log(respuesta)
            jugadorId = respuesta
          })
      }
    })
}

function seleccionarMascotaJugador() {
  
  // sectionSeleccionarAtaque.style.display = "flex"
  // let imagenDeCapipepo = new Image()
  // imagenDeCapipepo.src = capipepo.foto
  // lienzo.fillRect(5, 15, 20, 40)

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador = inputHipodoge.id
  } else if (inputCapipeo.checked) {
    spanMascotaJugador.innerHTML = inputCapipeo.id
    mascotaJugador = inputCapipeo.id
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
  } else {
    alert("Selecciona una mascota 😡")
    return
  }

  sectionSeleccionarMascota.style.display = "none"

  seleccionarMokepon(mascotaJugador)

  extraerAtaques(mascotaJugador)
  sectionVerMapa.style.display = "flex"
  iniciarMapa()
}

function seleccionarMokepon(mascotaJugador) {
  fetch(`http://debian.localhost:8080/mokepon/${jugadorId}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mokepon: mascotaJugador
    })
  })
}

function extraerAtaques(mascotaJugador) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}

const mostrarAtaques = (ataques) => {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-de-ataque BAtaque">
      ${ataque.nombre}
    </button>
    `
    contenedorAtaques.innerHTML += ataquesMokepon
  }) 

  botonFuego = document.getElementById("boton-fuego")
  botonAgua = document.getElementById("boton-agua")
  botonTierra = document.getElementById("boton-tierra")
  botones = document.querySelectorAll(".BAtaque")

  // botonFuego.addEventListener("click", ataqueFuego);
  // botonAgua.addEventListener("click", ataqueAgua);
  // botonTierra.addEventListener("click", ataqueTierra);
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      console.log(e)
      if (e.target.outerText === '🔥') {
        ataqueJugador.push('FUEGO')
        console.log(ataqueJugador)
        boton.style.backgroundColor = '#112f58'
        boton.disabled = true
      } else if (e.target.outerText === '🌊') {
        ataqueJugador.push('AGUA')
        console.log(ataqueJugador)
        boton.style.backgroundColor = '#112f58'
        boton.disabled = true
      } else {
        ataqueJugador.push('TIERRA')
        console.log(ataqueJugador)
        boton.style.backgroundColor = '#112f58'
        boton.disabled = true
      }
      // ataqueAleatorioEnemigo()
      
      if (ataqueJugador.length === 5) {
        enviarAtaques()
      }
    })
  })
}

function enviarAtaques() {
  fetch(`http://debian.localhost:8080/mokepon/${jugadorId}/ataques`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ataques: ataqueJugador
    })
  })

  intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
  fetch(`http://debian.localhost:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res) {
      if(res.ok) {
        res.json()
          .then(function ({ ataques}) {
            if (ataques.length === 5) {
              ataqueEnemigo = ataques
              combate()
            }
          })
      }
    })
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1)
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
  ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
  secuenciaAtaque()
}

/*
const ataqueFuego = () => {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
};

const ataqueAgua = () => {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
};

const ataqueTierra = () => {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
};
*/

const ataqueAleatorioEnemigo = () => {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO")
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA")
  } else {
    ataqueEnemigo.push("TIERRA")
  }
  iniciarPelea()
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate()
  }
}

function indexAmbosOponente(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo] 
}

const combate = () => {
  clearInterval(intervalo)

  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponente(index, index)
      crearMensaje('EMPATE')
    } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
      indexAmbosOponente(index, index)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
      indexAmbosOponente(index, index)
      crearMensaje('GANASTE')
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else {
      indexAmbosOponente(index, index)
      crearMensaje('PERDISTE')
      victoriasEnemigo++
      spanVidasEnemigo.innerHTML = victoriasEnemigo
    }
  }

  /*
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE 🤦");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE 👍");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje("GANASTE 👍");
  } else {
    crearMensaje("PERDISTE 😭");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  */

  revisarVidas();
};

const revisarVidas = () => {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("Esto fue un empate! 🙀");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("Felicitaciones! Ganaste 🎉");
  } else {
    crearMensajeFinal("Lo siento, perdiste 🥺");
  }
};

const crearMensaje = (resultado) => {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
};

const crearMensajeFinal = (resultadoFinal) => {
  sectionMensajes.innerHTML = resultadoFinal;

  /*
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  */

  sectionReiniciar.style.display = "block";
};

const reiniciarJuego = () => {
  location.reload();
};

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height) // limpiar canvas
  // Cargar imagen fondo
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  )
  
  mascotaJugadorObjeto.pintarMokepon()

  enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

  // hipodogeEnemigo.pintarMokepon()
  // capipepoEnemigo.pintarMokepon()
  // ratigueya.pintarMokepon()

  mokeponesEnemigos.forEach(function (mokepon) {
    mokepon.pintarMokepon()
    revisarColision(mokepon)
  })

  /*
  if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
    revisarColision(hipodogeEnemigo)
    revisarColision(capipepoEnemigo)
    revisarColision(ratigueyaEnemigo)
  }
  */
}

function enviarPosicion(x, y) {
  fetch(`http://debian.localhost:8080/mokepon/${jugadorId}/posicion`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      x,
      y
    })
  })
  .then(function (res) {
    if (res.ok) {
      res.json()
        .then(function ({ enemigos }) {
          console.log(enemigos)
          
          mokeponesEnemigos = enemigos.map(function (enemigo) {
            let mokeponEnemigo = null
            const mokeponNombre = enemigo.mokepon.nombre || ""
            
            if (mokeponNombre === 'Hipodoge') {
              mokeponEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.webp', enemigo.id)
            } else if (mokeponNombre === 'Capipepo') {
              mokeponEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.png', enemigo.id)
            } else if (mokeponNombre === 'Ratigueya') {
              mokeponEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.webp', enemigo.id)
            }

            mokeponEnemigo.x = enemigo.x
            mokeponEnemigo.y = enemigo.y

            return mokeponEnemigo
          })
        })
    }
  })
}

function moverDerecha() {
  // capipepo.x = capipepo.x + 5
  mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
  // capipepo.x = capipepo.x - 5
  mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
  // capipepo.y = capipepo.y + 5
  mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba() {
  // capipepo.y = capipepo.y - 5
  mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0
  mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case 'ArrowUp':
      moverArriba()
      break
    case 'ArrowDown':
        moverAbajo()
        break
    case 'ArrowLeft':
      moverIzquierda()
      break
    case 'ArrowRight':
      moverDerecha()
      break
    default:
      break
  }
}

function iniciarMapa() {
  // mapa.width = 320
  // mapa.height = 240

  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)

  intervalo = setInterval(pintarCanvas, 50)

  // Evento teclado
  window.addEventListener('keydown', sePresionoUnaTecla)
  window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i]
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x

  const arribaMascota = mascotaJugadorObjeto.y
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
  const izquierdaMascota = mascotaJugadorObjeto.x

  if(
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return 
  }
  // alert(`Hay colision 💥 ${enemigo.nombre}`)
  detenerMovimiento()
  clearInterval(intervalo)

  enemigoId = enemigo.id

  sectionSeleccionarAtaque.style.display = "flex"
  sectionVerMapa.style.display = 'none'
  seleccionarMascotaEnemigo(enemigo)
}

iniciarJuego();
