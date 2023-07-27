const GAME_SPEED = 100;
const CANVAS_BORDER_COLOUR = "black";
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = "lightgreen";
const SNAKE_BORDER_COLOUR = "darkgreen";
const FOOD_COLOUR = "red";
const FOOD_BORDER_COLOUR = "darkred";

/**
 * Representando a nuestra serpiente
 * Para que nuestro juego de serpientes funcione, necesitamos saber la ubicación de la serpiente en el lienzo.
 * Para hacer eso, podemos representar a la serpiente como una matriz de coordenadas.
 * Así, para crear una serpiente horizontal en medio del lienzo (150, 150) podemos escribir lo siguiente:
 * Observe que la coordenada y para todas las partes es siempre 150.
 * La coordenada x de cada parte es -10px (a la izquierda) de la parte anterior.
 * El primer par de coordenadas en la matriz {x: 150, y: 150} representa la cabeza a la derecha de la serpiente.
 */
let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

// Puntaje de usuario
let score = 0;

// Cuando se establece en verdadero, la serpiente está cambiando de dirección
let changingDirection = false;

// Comida cordenada X
let foodX;

// Comida cordenada Y
let foodY;

// Velocidad Horizontal
let dx = 10;

// Velocidad Vertical
let dy = 0;

// Obtener el elemento lienzo
const gameCanvas = document.getElementById("gameCanvas");

// Devolver un contexto de dibujo bidimensional
const ctx = gameCanvas.getContext("2d");

// Iniciar Juego
main();

// Crear la primera ubicación de Comida
createFood();

// Invocar changeDirection() cada vez que se presione una tecla
document.addEventListener("keydown", changeDirection);

/**
 * Main() iniciar el juego
 * llamado repetidamente para avanzar el juego
 */
function main() {
  // Si el juego terminó, regresa para detener el juego
  if (didGameEnd()) return;

  setTimeout(function onTick() {
    changingDirection = false;
    clearCanvas();
    drawFood();
    advanceSnake();
    drawSnake();

    // Llamar juego de nuevo
    main();
  }, GAME_SPEED);
}

/**
 * Cambia el color de fondo del lienzo a CANVAS_BACKGROUND_COLOUR y dibuja un borde alrededor
 */
function clearCanvas() {
  // Selecciona el color para rellenar el dibujo
  ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;

  // Seleccione el color para el borde del lienzo
  ctx.strokestyle = CANVAS_BORDER_COLOUR;

  // Dibuja un rectángulo "filled" para cubrir todo el lienzo
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  // Draw a "border" around the entire canvas
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

// Dibuja la comida en el lienzo
function drawFood() {
  ctx.fillStyle = FOOD_COLOUR;
  ctx.strokestyle = FOOD_BORDER_COLOUR;
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

/**
 * La serpiente avanza cambiando las coordenadas x de sus partes según la velocidad horizontal
 * y las coordenadas y de sus partes según la velocidad vertical
 */
function advanceSnake() {
  // Crea nueva cabeza de serpiente
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Agregue la nueva cabeza al comienzo del cuerpo de serpiente
  snake.unshift(head);

  const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
  if (didEatFood) {
    // Incrementa puntaje
    score += 10;

    // Mostrar puntuación en pantalla
    document.getElementById("score").innerHTML = score;

    // Generar nueva ubicación de comida
    createFood();
  } else {
    // Retire la última parte del cuerpo de la serpiente
    snake.pop();
  }
}

/**
 * Devuelve verdadero si la cabeza de la serpiente tocó otra parte del juego o alguna de las paredes
 */
function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > gameCanvas.width - 10;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > gameCanvas.height - 10;

  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}

/**
 * Genera un número aleatorio que es un múltiplo de 10 dado un número mínimo y máximo
 * @param { number } min - El número mínimo que puede ser el número aleatorio
 * @param { number } max - El número maximo que puede ser el número aleatorio
 */
function randomTen(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

// Crea un conjunto aleatorio de coordenadas para la comida de serpiente
function createFood() {
  // Genera numero aleatorio de la comida x-coordenada
  foodX = randomTen(0, gameCanvas.width - 10);

  // Genera numero aleatorio de la comida y-coordenada
  foodY = randomTen(0, gameCanvas.height - 10);

  // si la nueva ubicación de comida es donde está actualmente la serpiente, genere una nueva ubicación de comida
  snake.forEach(function isFoodOnSnake(part) {
    const foodIsoNsnake = part.x == foodX && part.y == foodY;
    if (foodIsoNsnake) createFood();
  });
}

/**
 * Dibuja la serpiente en el lienzo
 */
function drawSnake() {
  // recorrer las partes de la serpiente dibujando cada parte en el lienzo
  snake.forEach(drawSnakePart);
}

/**
 * Dibuja una parte de la serpiente en el lienzo
 * @param { object } snakePart - Las coordenadas donde se debe dibujar la pieza
 */
function drawSnakePart(snakePart) {
  // Establecer el color de la parte de la serpiente
  ctx.fillStyle = SNAKE_COLOUR;

  // Establecer el color del borde de la parte de la serpiente
  ctx.strokestyle = SNAKE_BORDER_COLOUR;

  // Dibuja un rectángulo "filled" para representar la parte de la serpiente en las coordenadas en que se encuentre la parte
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

  // Dibuja un borde alrededor de la parte de la serpiente
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

/**
 * Cambia la velocidad vertical y horizontal de la serpiente de acuerdo con la tecla que se presionó.
   La dirección no se puede cambiar a la dirección opuesta, para evitar que la serpiente retroceda. 
   Por ejemplo, si la dirección es "derecha", no puede convertirse en "izquierda".
 * @param { object } event - El keydown evento
 */
function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  /**
   * Evita que la serpiente retroceda.
   * Escenario de ejemplo:
   * Snake se mueve hacia la derecha.
   * El usuario presiona hacia abajo e inmediatamente hacia la izquierda y la serpiente cambia de dirección inmediatamente
   * sin dar un paso hacia abajo primero
   */
  if (changingDirection) return;
  changingDirection = true;

  const keyPressed = event.keyCode;

  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}
