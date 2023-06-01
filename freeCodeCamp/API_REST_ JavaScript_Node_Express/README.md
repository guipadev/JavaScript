# Proyecto CrossFit
API REST para una aplicación de entrenamiento de CrossFit. Si no estás familiarizado con CrossFit, es un método de acondicionamiento físico y un deporte competitivo que combina entrenamientos de alta intensidad con elementos de varios deportes (levantamiento de pesas olímpico, gimnasia y otros).

En nuestra aplicación nos gustaría crear, leer, actualizar y borrar WOD 's ( Ejercicios del día). Esto ayudará a nuestros usuarios (que serán propietarios de gimnasios) a elaborar planes de entrenamiento y mantener sus propios entrenamientos dentro de una sola aplicación. Además de eso, también pueden agregar algunos consejos de entrenamiento importantes para cada entrenamiento.

Nuestro trabajo requerirá que diseñemos e implementemos una API para esa aplicación.

### Arquitectura
Usaremos Express.js para nuestra API. con la arquitectura de 3 capas:

Arquitectura.jpg

Dentro del controlador manejaremos todo lo relacionado con HTTP. Eso significa que estamos tratando con solicitudes y respuestas para nuestros puntos finales. Por encima de esa capa también hay un pequeño enrutador de Express que pasa las solicitudes al controlador correspondiente.

Toda la lógica comercial estará en la capa de servicio que exporta ciertos servicios (métodos) que utiliza el controlador.

La tercera capa es la capa de acceso a datos donde trabajaremos con nuestra base de datos. Exportaremos algunos métodos para ciertas operaciones de base de datos, como crear un WOD que pueda ser utilizado por nuestra capa de servicio.

No usamos una base de datos real, estamos usando un archivo JSON local que imita nuestra base de datos. Pero esta lógica se puede transferir a otras bases de datos, por supuesto.

### Dependencias para la configuración básica
```npm i -D nodemon```

```npm i express```


### Activa el servidor de desarrollo
```npm run dev```

### End points

GET /api/v1/workouts/:workoutId 

localhost:3000/api/v1/workouts/2342

localhost:3000/api/v1/workouts