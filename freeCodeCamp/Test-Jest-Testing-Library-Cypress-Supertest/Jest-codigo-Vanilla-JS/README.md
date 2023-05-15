### Configurar Jest
Creamos un nuevo directorio en nuestra máquina y creando una aplicación Node con npm init -y. 

Luego instale Jest ejecutándolo ```npm i -D jest -D``` 

validar package.json archivo: "devDependencies": { "jest": "^27.5.1" } .

Y reemplazar el testscript con "test": "jest". 

El package.json archivo completo debería verse así:

```
{
  "name": "vanillatesting",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^27.5.1"
  }
}
```
### Ejecutar test
```npm test```

