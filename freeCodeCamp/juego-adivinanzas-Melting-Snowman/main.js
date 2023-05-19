/**
 * Primero, definimos una matriz llamada words que contiene la lista de palabras para elegir.
 * También definimos variable constante maxWrongGuesses número máximo de intentos incorrectos
 * permitidos antes de que finalice el juego.
 */

// Definición de lista de palabras a elegir
const words = [
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "NODE",
  "REACT",
  "ANGULAR",
  "JQUERY",
  "VUE",
];

// Definir el número máximo de conjeturas incorrectas permitidas
const maxWrongGuesses = 6;

/**
 * VAR: wordToGuess, guessedLetters, wrongGuessesy imageCount.
 * wordToGuess: contendrá la palabra aleatoria que el jugador necesita adivinar.
 * guessedLetters: contendrá una serie de guiones bajos que representan las letras no adivinadas de la palabra.
 * wrongGuesses: hará un seguimiento del número de conjeturas incorrectas que ha hecho el jugador.
 * imageCount: utiliza para determinar qué imagen de Muñeco de nieve derritiéndose a mostrar.
 */

let wordToGuess = "";
let guessedLetters = [];
let wrongGuesses = 0;
let imageCount = 1;

/**
 * Función llamada selectRandomWord()
 * que selecciona una palabra aleatoria de la matriz de palabras usando la Math.random() función.
 */

// Selecciona una palabra al azar de la lista
function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

/**
 * - initializeGame() función que inicializa el juego.
 * - variable wordToGuess una palabra seleccionada al azar,
 * - guessedLetters una matriz de guiones bajos "_",
 * - wrongGuesses en 0
 *   genera los botones de letras para que el jugador haga conjeturas y borra cualquier mensaje previo de ganar/perder.
 */

// Inicializa el juego
function initializeGame() {
  wordToGuess = selectRandomWord();
  guessedLetters = Array(wordToGuess.length).fill("_");
  wrongGuesses = 0;

  // Actualizar la pantalla de palabras
  updateWordDisplay();

  updateMeltingSnowmanGraphic();

  // Eliminar cualquier botón generado previamente
  const lettersContainer = document.querySelector(".letters");

  while (lettersContainer.firstChild) {
    lettersContainer.removeChild(lettersContainer.firstChild);
  }

  // Generar los botones de letras
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement("button");
    button.innerText = letter;
    button.addEventListener("click", function () {
      handleGuess(letter);
    });
    lettersContainer.appendChild(button);
  }

  // Borrar cualquier mensaje anterior de ganar/perder
  const messageContainer = document.querySelector(".message");
  messageContainer.innerText = "";
}

/**
 * Implementemos las funciones utilizadas al inicializar el juego.
 * función updateWordDisplay() actualiza la visualización de palabras en la página seleccionando el
 * .word elemento contenedor y configurando su texto en la matriz guessedLetters unida.
 */

// HActualizar la pantalla de palabras
function updateWordDisplay() {
  const wordContainer = document.querySelector(".word");
  wordContainer.innerText = guessedLetters.join(" ");
}

/**
 * función handleGuess() maneja una conjetura de letra hecha por el jugador.
 * Comprueba si la letra ya se ha adivinado, agrega la letra a la matriz guessedLetters
 * si está en la palabra oculta, incrementa wrongGuesses y actualiza el gráfico Melting Snowman
 * si la letra no está en la palabra oculta y comprueba si el juego se ganó o se perdió.
 */

// Manejar una conjetura de letra
function handleGuess(letter) {
  // Si la letra ya ha sido adivinada, no haga nada.
  if (guessedLetters.includes(letter)) {
    return;
  }

  // Agregar la letra a la lista de letras adivinadas
  guessedLetters.forEach((guessedLetter, index) => {
    if (wordToGuess[index] === letter) {
      guessedLetters[index] = letter;
    }
  });

  // Si la letra no está en la palabra oculta, incremente el conteo de conjeturas incorrectas y actualice el gráfico Melting Snowman
  if (!wordToGuess.includes(letter)) {
    wrongGuesses++;
    updateMeltingSnowmanGraphic();
  }

  // Actualizar la pantalla de palabras
  updateWordDisplay();

  // Comprobar si el juego ha sido ganado o perdido
  checkWinOrLose();
}

/**
 * función updateMeltingSnowmanGraphic() actualiza el gráfico Melting Snowman seleccionando el
 * .MeltingSnowman elemento contenedor y configurando su HTML interno en un elemento img con los atributos src
 * y alt apropiados.
 *
 * Las imágenes se crean externamente y se guardarán como archivos png desde “MeltingSnowman1.png”
 * hasta “MeltingSnowman6.png”, cada uno con el gráfico correspondiente.
 * Guárdados en una carpeta y copiar la ruta a la etiqueta "img src":
 */

// Actualizar el gráfico Melting Snowman
function updateMeltingSnowmanGraphic() {
  const meltingSnowmanContainer = document.querySelector(".MeltingSnowman");
  meltingSnowmanContainer.innerHTML = `<img src="path/MeltingSnowman${imageCount}.png" alt="MeltingSnowman ${imageCount}">`;
  imageCount++;
}

/**
 * función checkWinOrLose() verifica si el juego se ha ganado o perdido comparando la matriz guessedLetters unida
 * con la variable wordToGuess y verificando si wrongGuesses es mayor o igual que maxWrongGuesses.
 * Si el juego se ganó o se perdió, muestra el mensaje apropiado y desactiva los botones de letras.
 */

// Comprueba si el juego ha sido ganado o perdido
function checkWinOrLose() {
  if (guessedLetters.join("") === wordToGuess) {
    const messageContainer = document.querySelector(".message");
    messageContainer.innerText = "You win!";
    const letterButtons = document.querySelectorAll(".letters button");
    letterButtons.forEach((button) => {
      button.disabled = true;
      button.removeEventListener("click", handleGuess);
    });
  } else if (wrongGuesses >= maxWrongGuesses) {
    const messageContainer = document.querySelector(".message");
    messageContainer.innerText = `You lose! The word was "${wordToGuess}".`;
    const meltingSnowmanContainer = document.querySelector(".MeltingSnowman");
    meltingSnowmanContainer.innerHTML = `<img src="images/gameover.png" alt="gameover">`;
    const letterButtons = document.querySelectorAll(".letters button");
    letterButtons.forEach((button) => {
      button.disabled = true;
      button.removeEventListener("click", handleGuess);
    });
  }
}

/**
 * se llama a la función initializeGame()
 * cuando se carga la página usando la declaración window.addEventListener('load', initializeGame).
 */
// Inicializar el juego cuando se carga la página
window.addEventListener("load", initializeGame);
