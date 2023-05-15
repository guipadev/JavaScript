## ¿Por qué preocuparse por la carga de scripts?

Si su aplicación es pequeña y se ocupa de archivos de script de unos pocos KB, solo le importará un poco la velocidad de la página y la carga del script.

Pero puede tratar con guiones más grandes escritos por una biblioteca de terceros o por usted mismo en la vida real. Debe asegurarse de que la velocidad de carga de la página no se degrade debido a esto.

### El juego Secret Santa - Demostración de velocidad de página
El Secret Santa Gamees un juego simple que selecciona un Papá Noel, un Niño y el regalo que Papá Noel le dará al niño. Cada vez que hace clic en el Play botón, se seleccionan un nuevo Papá Noel, un niño y un regalo.

El archivo HTML de punto de entrada crea la estructura para mostrar la imagen del regalo y los nombres de Papá Noel y el niño. Tiene un botón con el texto Playy un pie de página donde mostramos un texto de derechos de autor.

### async & defer
- El mejor lugar para la <script> etiqueta en un documento HTML es dentro de las <head>...</head>etiquetas. 
Sin embargo, puede encontrar problemas al configurar el contenido DOM.

- Colocar la <script>etiqueta al final de la <body>etiqueta es una forma ideal de manejar las secuencias de comandos.

- HTML proporciona los atributos async y defer para cargar la página más rápido y minimizar el mayor retraso en la carga de scripts descargándolos en segundo plano.
  
- Úselo async para los scripts externos que no realizan manipulaciones de DOM. No async garantiza la interrupción del procesamiento de la página cuando se ejecuta el script.
  
- Úselo defer para todos los scripts que realizan manipulaciones DOM. Los scripts con el defer atributo se ejecutan en secuencia al final de la carga de la página.