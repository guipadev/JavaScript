# API REST: crear, probar, consumir y documentar las API REST

Arquitectura con Node y Express, las pruebas unitarias con Supertest, consumir la API desde una aplicación front-end de React y documentada la API usando herramienta Swagger.

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

## API REST con Node y Express

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

## Probar una API REST con Supertest

SuperTest es una biblioteca de JavaScript que se utiliza para probar servidores HTTP o aplicaciones web que realizan solicitudes HTTP. Proporciona una abstracción de alto nivel para probar HTTP, lo que permite a los desarrolladores enviar solicitudes HTTP y hacer afirmaciones sobre las respuestas recibidas, lo que facilita la escritura de pruebas automatizadas para aplicaciones web.

SuperTest funciona con cualquier marco de prueba de JavaScript, como Mocha o Jest , y se puede usar con cualquier servidor HTTP o marco de aplicación web, como Express.

### Configurar uso SuperTest
Primero necesitaremos instalar algunas dependencias. 
En package.json archivo y reemplazar las devDependencies sección con esto y luego correr ```npm install```

```
"devDependencies": {
    "@babel/core": "^7.21.4",
    "@babel/preset-env": "^7.21.4",
    "babel-jest": "^29.5.0",
    "jest": "^29.5.0",
    "jest-babel": "^1.0.1",
    "nodemon": "^2.0.22",
    "supertest": "^6.3.3"
  }
```
Aquí estamos instalando las bibliotecas supertesty jest, que necesitamos para que se ejecuten nuestras pruebas, además de algunas babel cosas que necesitamos para que nuestro proyecto identifique correctamente qué archivos son archivos de prueba.

Incluir en package.json, este script:

```
"scripts": {
    "test": "jest"
  },
```

Para finalizar con el modelo estándar, en la raíz del proyecto, crear un babel.config.cjs archivo e incluir este código en él:

```
//babel.config.cjs
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };
```

## Ejecuta pruebta test

En la terminal, ejecuta ```npm test```, y debería ver pasar todas tus pruebas.

# Consumir una API REST en una aplicación Front-end React

Si nuestro servidor se está ejecutando y nuestros puntos finales se comportan como se esperaba. Se realiza aplicación front-end para consumir nuestra API.

Para este ejemplo, usaremos una aplicación React y dos herramientas diferentes para enviar y procesar nuestras solicitudes: la API Fetch y la biblioteca Axios.

## Nuestras herramientas

### React 
Es una biblioteca de JavaScript popular para crear interfaces de usuario. Permite a los desarrolladores crear componentes de interfaz de usuario reutilizables y actualizarlos y renderizarlos de manera eficiente en respuesta a los cambios en el estado de la aplicación.

### Fetch API 
Es una API de navegador moderna que permite a los desarrolladores realizar solicitudes HTTP asincrónicas desde el código JavaScript del lado del cliente. Proporciona una interfaz simple para obtener recursos a través de la red y admite una variedad de tipos de solicitudes y respuestas.

### Axios 
Es una biblioteca de cliente HTTP popular para JavaScript. Proporciona una API simple e intuitiva para realizar solicitudes HTTP y es compatible con una amplia gama de funciones, incluida la intercepción de solicitudes y respuestas, transformaciones automáticas para datos de solicitudes y respuestas, y la capacidad de cancelar solicitudes. Se puede usar tanto en el navegador como en el servidor, y a menudo se usa junto con las aplicaciones React.

### Instalaciones

El proyecto se creo con: ```yarn create vite```

Para inicializar front: ```yarn```

Para ejecutarlo/correr: ```yarn dev```

#### Se instalo las herramientas antes mencionadas:

- Consumo API: ```yarn add axios```

- Enrutamiento básico en nuestra aplicación: ```yarn add react-router-dom```


# Documentada la API REST con Swagger

En empresas es muy habitual tener equipos back-end y front-end. Cuando se está desarrollando una API y necesita integrarse con una aplicación front-end, sería muy tedioso preguntar qué punto final hace qué y qué parámetros se deben pasar. Si tiene toda esa información en un solo lugar, puede ir allí y leerla usted mismo. 

Swagger es un conjunto de herramientas de código abierto que ayudan a los desarrolladores a crear, documentar y consumir servicios web RESTful. Proporciona una interfaz gráfica fácil de usar para que los usuarios interactúen con una API y también genera código de cliente para varios lenguajes de programación para facilitar la integración de la API.

## Swagger 
Proporciona un conjunto completo de funciones para el desarrollo de API, incluido el diseño, la documentación, las pruebas y la generación de código de API. Permite a los desarrolladores definir los puntos finales de la API, los parámetros de entrada, la salida esperada y los requisitos de autenticación de forma estandarizada mediante la especificación OpenAPI.

## Swagger UI
Es una herramienta popular que presenta las especificaciones de OpenAPI como una documentación de API interactiva que permite a los desarrolladores explorar y probar las API a través de un navegador web. Proporciona una interfaz fácil de usar que permite a los desarrolladores ver e interactuar fácilmente con los puntos finales de la API.

### Implementación Swagger
Necesitaremos instalar en el backend dos dependencias. 

```npm i swagger-jsdoc```
y 
```npm i swagger-ui-express```

La documentación de la API en GUI puede verla en la siguiente dirección:
```
http://localhost:3000/api-docs/
```
