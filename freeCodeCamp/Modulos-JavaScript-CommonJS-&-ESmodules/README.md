## ¿Qué son los módulos y por qué son útiles?

Un módulo es solo una pieza de código en un archivo que puede llamar y usar desde otros archivos. Un diseño modular es lo opuesto a tener todo el código de tu proyecto en un solo archivo.

Al desarrollar un gran proyecto, es muy útil dividir nuestro código en módulos por las siguientes razones:

- Es bueno para dividir inquietudes y funciones en diferentes archivos, lo que ayuda a la visualización y organización del código.

- El código tiende a ser más fácil de mantener y menos propenso a errores y fallas cuando está claramente organizado.

- Los módulos se pueden usar y reutilizar fácilmente en diferentes archivos y partes de nuestro proyecto, sin necesidad de volver a escribir el mismo código.

En lugar de tener todos los componentes de nuestro programa en un solo archivo, podemos dividirlo en partes o módulos, y hacer que cada uno de ellos sea responsable de una sola función/inquietud.

## Tipos de módulos

Como ocurre con casi todo en la vida, y especialmente en JavaScript, existen muchas formas de implementar módulos.

### Módulos CommonJS

CommonJS se usa principalmente en aplicaciones JS del lado del servidor con Node, ya que los navegadores no admiten el uso de CommonJS.

### Módulos ES
ESmodules es un estándar que se introdujo con ES6 (2015). La idea era estandarizar el funcionamiento de los módulos JS e implementar estas características en los navegadores (que anteriormente no admitían módulos).

ESmodules es un enfoque más moderno que actualmente es compatible con el navegador y las aplicaciones del lado del servidor con Node.

Una vez más, comenzamos creando una aplicación Node con ```npm init -y```.

Ahora vamos a nuestro package.json y "type": "module" le agregamos, así:

```
{
  "name": "modulestestapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```

Si no hacemos esto e intentamos implementar ESmodules en Node, obtendremos un error como este:

```
(node:29568) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
...
SyntaxError: Cannot use import statement outside a module
```

### aplicación de Node

Ejecutando ```npm init -y```

Luego, necesitaremos instalar Webpack y la CLI de Webpack ejecutando ```npm i --save-dev webpack webpack-cli```

package.jsonarchivo y agreguemos un build script, como este:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
```

Luego podemos volver a nuestra terminal y ejecutar ```npm run build```. 
Eso debería crear un dist directorio dentro de nuestro proyecto, y dentro de él un bundle.js archivo.

Si revisa ese archivo, verá este código dentro

```
(()=>{"use strict";document.getElementById("isAlive").addEventListener("click",(()=>console.log("Mod1 is alive!"))),document.getElementById("isRolling").addEventListener("click",(()=>console.log("Mod1 is rolling, baby!"))),console.log("Im the main function")})();

```