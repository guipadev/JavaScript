Jest combinarlo con la biblioteca Testing para probar una aplicación React

La aplicación de una sola página con texto aleatorio, un botón que alterna otro fragmento de texto, 
una entrada de texto y un botón que alterna la representación de la entrada.

Usaremos create-react-app para crear esta aplicación (que tiene la biblioteca Jest y Testing instalada de manera predeterminada). 
Si no está utilizando create-react-app, es posible que deba instalar ambas bibliotecas y agregar alguna configuración adicional.

Probar la prueba:

```
npm test -- About.test.jsx
```

Otra característica de Jest es la cobertura de prueba. Puede obtener un informe de cobertura ejecutando 
```
npm test -- --coverage
```
