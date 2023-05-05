### Abstract Factory en TypeScript
Abstract Factory es un patrón de diseño creacional que resuelve el problema de crear familias enteras de productos sin especificar sus clases concretas.

El patrón Abstract Factory define una interfaz para crear todos los productos, pero deja la propia creación de productos para las clases de fábrica concretas. Cada tipo de fábrica se corresponde con cierta variedad de producto.

El código cliente invoca los métodos de creación de un objeto de fábrica en lugar de crear los productos directamente con una llamada al constructor (operador new). Como una fábrica se corresponde con una única variante de producto, todos sus productos serán compatibles.

El código cliente trabaja con fábricas y productos únicamente a través de sus interfaces abstractas. Esto permite al mismo código cliente trabajar con productos diferentes. Simplemente, creas una nueva clase fábrica concreta y la pasas al código cliente.

```
Si no sabes la diferencia entre los distintos patrones de fábrica y sus conceptos, lee nuestra Comparación de fábricas.
https://refactoring.guru/es/design-patterns/factory-comparison
```

### Ejemplos de uso: 
El patrón Abstract Factory es muy común en el código TypeScript. Muchos frameworks y bibliotecas lo utilizan para proporcionar una forma de extender y personalizar sus componentes estándar.

### Identificación: 
El patrón es fácil de reconocer por los métodos, que devuelven un objeto de fábrica. Después, la fábrica se utiliza para crear subcomponentes específicos.

### Ejemplo conceptual
Este ejemplo ilustra la estructura del patrón de diseño Abstract Factory, centrándose en responder las siguientes preguntas:

¿De qué clases se compone?
¿Qué papeles juegan esas clases?
¿De qué forma se relacionan los elementos del patrón?