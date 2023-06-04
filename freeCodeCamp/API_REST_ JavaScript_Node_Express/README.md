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

```npm i body-parser```

```npm i uuid```

### Activa el servidor de desarrollo
```npm run dev```

### End points

GET - Consulta especifica - /api/v1/workouts/:workoutId 
localhost:3000/api/v1/workouts/2342
localhost: 3000/api/v1/workouts/4a3d9aaa-608c-49a7-a004-66305ad4ab50

GET - Consultar todos
localhost:3000/api/v1/workouts

POST - Creación 
localhost: 3000/api/v1/workouts

{
  "name": "Core Buster",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}

### Agrupe los recursos asociados juntos (anidamiento lógico)
Cuando está diseñando su API, puede haber casos en los que tenga recursos asociados con otros. 
Es una buena práctica agruparlos en un punto final y anidarlos correctamente.

Consideremos que, en nuestra API, también tenemos una lista de miembros que están registrados en 
nuestro cuadro de CrossFit ("cuadro" es el nombre de un gimnasio de CrossFit). 
Con el fin de motivar a nuestros miembros, realizamos un seguimiento de los registros de caja 
generales para cada entrenamiento.

Por ejemplo, hay un entrenamiento en el que tienes que hacer un cierto orden de ejercicios 
lo más rápido posible. 
Registramos los tiempos de todos los miembros para tener una lista del tiempo de cada miembro 
que completó este entrenamiento.

Ahora, la interfaz necesita un punto final que responda con todos los registros de un entrenamiento 
específico para mostrarlo en la interfaz de usuario.

Los entrenamientos, los miembros y los registros se almacenan en diferentes lugares de la base de datos. Entonces, lo que necesitamos aquí es una caja (registros) dentro de otra caja (entrenamientos)

El URI para ese extremo será /api/v1/workouts/:workoutId/records. 

Esta es una buena práctica para permitir el anidamiento lógico de URL. 
La URL en sí no necesariamente tiene que reflejar la estructura de la base de datos.
