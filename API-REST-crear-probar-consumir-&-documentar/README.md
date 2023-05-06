# Manual de la API REST: cómo crear, probar, consumir y documentar las API REST

Se cubrira la configuración básica y la arquitectura con Node y Express, las pruebas unitarias con Supertest, veremos cómo podemos consumir la API desde una aplicación front-end de React y finalmente documentaremos la API usando herramientas como Swagger.

El objetivo descripción general de cómo funciona una API REST, cómo interactúan sus piezas y en qué podría consistir una implementación completa.

## ¿Qué es REST?
La transferencia de estado representacional (REST) ​​es un estilo arquitectónico ampliamente utilizado para crear servicios web y API.

Las API RESTful están diseñadas para ser simples, escalables y flexibles. A menudo se utilizan en aplicaciones web y móviles, así como en arquitecturas de microservicios e Internet de las cosas (IoT).

### Características principales:

1. Sin estado: las API REST no tienen estado, lo que significa que cada solicitud contiene toda la información necesaria para procesarla. Esto facilita el escalado de la API y mejora el rendimiento al reducir la necesidad de almacenar y administrar datos de sesión en el servidor.

2. Basado en recursos: las API REST se basan en recursos, lo que significa que cada recurso se identifica mediante un URI (identificador uniforme de recursos) único y se puede acceder a ellos mediante métodos HTTP estándar como GET, POST, PUT y DELETE.

3. Interfaz uniforme: las API REST tienen una interfaz uniforme que permite a los clientes interactuar con los recursos mediante un conjunto estandarizado de métodos y formatos de respuesta. Esto facilita que los desarrolladores construyan y mantengan las API, y que los clientes las consuman.

4. Almacenamiento en caché: las API REST se pueden almacenar en caché, lo que significa que las respuestas se pueden almacenar en caché para mejorar el rendimiento y reducir el tráfico de red.

5. Sistema en capas: las API REST están diseñadas para estar en capas, lo que significa que se pueden agregar intermediarios como proxies y puertas de enlace entre el cliente y el servidor sin afectar el sistema general.

### Ventajas de las API REST :

- Fácil de aprender y usar: las API REST son relativamente simples y fáciles de aprender en comparación con otras API.

- Escalabilidad: la naturaleza sin estado de las API REST las hace altamente escalables y eficientes.

- Flexibilidad: las API REST son flexibles y se pueden utilizar para crear una amplia gama de aplicaciones y sistemas.

- Amplio soporte: las API REST son ampliamente compatibles con marcos y herramientas de desarrollo, lo que facilita su integración en los sistemas existentes.

### Contras de las API REST :

- Falta de estándares: la falta de estándares estrictos para las API REST puede generar inconsistencias y problemas de interoperabilidad.

- Funcionalidad limitada: las API REST están diseñadas para manejar solicitudes y respuestas simples y pueden no ser adecuadas para casos de uso más complejos.

- Preocupaciones de seguridad: las API REST pueden ser vulnerables a ataques de seguridad como secuencias de comandos entre sitios (XSS) y falsificación de solicitudes entre sitios (CSRF) si no se implementan correctamente.

### Las API REST son mejores para:

- Las API REST son adecuadas para crear aplicaciones web y móviles, así como arquitecturas de microservicios y sistemas IoT.

- Son particularmente útiles en situaciones donde la escalabilidad y la flexibilidad son importantes, y donde los desarrolladores necesitan integrarse con sistemas y tecnologías existentes.

Las API REST son un estilo arquitectónico popular y ampliamente utilizado para crear servicios web y API. Son simples, escalables y flexibles, y se pueden utilizar para construir una amplia gama de aplicaciones y sistemas.

Si bien existen algunas limitaciones y preocupaciones con las API REST, siguen siendo una opción popular y efectiva para crear API en muchas industrias y sectores diferentes.

## Construir una API REST con Node y Express

### Nuestras herramientas

#### Node.js 
Es un entorno de tiempo de ejecución JavaScript back-end, multiplataforma y de código abierto que permite a los desarrolladores ejecutar código JavaScript fuera de un navegador web. Fue creado por Ryan Dahl en 2009 y desde entonces se ha convertido en una opción popular para crear aplicaciones web, API y servidores.

Node.js proporciona un modelo de E/S sin bloqueo y basado en eventos que lo hace liviano y eficiente, lo que le permite manejar grandes cantidades de datos con un alto rendimiento. También tiene una comunidad grande y activa, con muchas bibliotecas y módulos disponibles para ayudar a los desarrolladores a crear sus aplicaciones de forma más rápida y sencilla.

#### Express.js 
Es un marco de aplicación web popular para Node.js, que se utiliza para crear aplicaciones web y API. Proporciona un conjunto de características y herramientas para construir servidores web, manejar solicitudes y respuestas HTTP, enrutar solicitudes a controladores específicos, manejar middleware y mucho más.

Express es conocido por su simplicidad, flexibilidad y escalabilidad, lo que lo convierte en una opción popular para los desarrolladores que crean aplicaciones web con Node.js.

Algunas de las características y beneficios clave de Express.js incluyen:

- Minimalista y flexible: Express.js proporciona una estructura minimalista y flexible que permite a los desarrolladores crear aplicaciones de la forma que deseen.
- Enrutamiento: Express.js facilita la definición de rutas para manejar solicitudes HTTP y asignarlas a funciones o controladores específicos.
- Middleware: Express.js permite a los desarrolladores definir funciones de middleware que se pueden usar para manejar tareas comunes como autenticación, registro, manejo de errores y más.
- API robusta: Express.js proporciona una API robusta para manejar solicitudes y respuestas HTTP, lo que permite a los desarrolladores crear aplicaciones web de alto rendimiento.

## nuestra arquitectura
Para este proyecto seguiremos una arquitectura de capas en nuestra base de código. La arquitectura de capas se trata de dividir las preocupaciones y responsabilidades en diferentes carpetas y archivos, y permitir la comunicación directa solo entre ciertas carpetas y archivos.

La cuestión de cuántas capas debe tener su proyecto, qué nombres debe tener cada capa y qué acciones debe manejar es todo un tema de discusión. Así que veamos cuál creo que es un buen enfoque para nuestro ejemplo.

Nuestra aplicación contará con cinco capas diferentes, las cuales estarán ordenadas de esta forma:

- La capa de aplicación tendrá la configuración básica de nuestro servidor y la conexión a nuestras rutas (la siguiente capa).

- La capa de rutas tendrá la definición de todas nuestras rutas y la conexión a los controladores (la siguiente capa).

- La capa de controladores tendrá la lógica real que queremos realizar en cada uno de nuestros puntos finales y la conexión a la capa del modelo (la siguiente capa, se hace una idea...)

- La capa del modelo mantendrá la lógica para interactuar con nuestra base de datos simulada.

- La capa de persistencia es donde estará nuestra base de datos.

Una cosa importante a tener en cuenta es que en este tipo de arquitecturas, hay un flujo de comunicación definido entre las capas que debe seguirse para que tenga sentido.

Esto significa que una solicitud primero tiene que pasar por la primera capa, luego por la segunda, luego por la tercera y así sucesivamente. Ninguna solicitud debe saltarse capas porque eso alteraría la lógica de la arquitectura y los beneficios de organización y modularidad que nos brinda.

Otras opciones de arquitectura:
https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/

## El código
Construiremos una API para un negocio de refugio de mascotas. Este refugio de mascotas necesita registrar las mascotas que se hospedan en el refugio, y para eso realizaremos operaciones CRUD básicas (crear, leer, actualizar y eliminar).







