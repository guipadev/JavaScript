# Cómo probar una aplicación de nodo back-end

Crear un directorio y ejecútelo ```npm init -y``` para crear una aplicación Node. 

Ejecute ```npm i express``` para instalar Express y luego ejecute ```npm i -D jest supertest``` super test para instalar tanto Jest como Supertest como dependencias de desarrollo.

Dentro de package.json, agregue "scripts": { "test": "jest" }.

```
{
  "dependencies": {
    "express": "^4.17.3"
  },
  "devDependencies": {
    "jest": "^27.5.1",
    "supertest": "^6.2.2"
  },
    "scripts": {
    "test": "jest"
  }
}
```

Podemos ejecutar nuestras pruebas con ```npm test```