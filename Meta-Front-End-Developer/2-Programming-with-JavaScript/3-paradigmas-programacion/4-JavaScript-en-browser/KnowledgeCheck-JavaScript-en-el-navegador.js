// 1. En el código siguiente, se puede omitir el atributo de tipo.
// true

<script type="text/javascript">//Comment</script>;

// 2. ¿Qué devuelve la variable del documento en JavaScript?
console.log(document);

// Toda la página web en la memoria del navegador, como un objeto JavaScript.

// 3. ¿Qué devuelve la siguiente función?
getElementById("main-heading");
// El primer elemento que tiene el atributo id con un valor main-heading

// 4. Después de ejecutar el siguiente código, ¿qué sucederá cuando el usuario haga clic en el elemento ap en el navegador?

document.querySelector("h1").addEventListener("click", function () {
  console.log("clicked");
});

// nada - Nothing.

// 5. ¿Qué se imprimirá cuando se ejecute el siguiente código?

var result = {
  value: 7,
};

console.log(JSON.stringify(result)); // {"value": 7}
