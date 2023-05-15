# Jest combinarlo con la biblioteca Testing para probar una aplicación React

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

# Probar aplicación React con Cypress

Instalar Cypress ejecutando ```npm i -D cypress```

Entonces correremos ```npx cypress open```

Esto abrirá el navegador Cypress y creará un cypress directorio dentro de nuestro proyecto. 
Dentro de este directorio encontrará ejemplos, documentación y opciones de configuración.

También encontrarás una carpeta de "integración", en la que tenemos que poner nuestras pruebas. 
Entonces, creemos nuestro About.test.js archivo en esa carpeta y repliquemos los mismos ejemplos de prueba Jest



```
// About.test.js
describe('AboutPage', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/about')
        cy.contains("I'm the about page!")
    })

    it('switch btn toggles text', () => {
        cy.contains("It's on!")
        cy.get('.switchBtn').click()
        cy.contains("It's rolling!")
        cy.get('.switchBtn').click()
        cy.contains("It's on!")
    })

    it('Input works correctly', () => {
        cy.get(".testInput").type("Testing the test")
        cy.get('.printInputBtn').click()
        cy.contains("Testing the test")

        cy.get('.printInputBtn').click()
        cy.contains("Testing the test").should('not.exist')
    })
})
```

La describe función funciona igual.
it()es la misma que la test() función que hemos visto anteriormente.
En la primera prueba, le decimos al navegador que visite la URL de nuestra aplicación y verifique que se muestre el texto correspondiente:

```
cy.visit('http://localhost:3000/about')
cy.contains("I'm the about page!")
```

Luego verificamos que se represente el texto de alternancia predeterminado, simulamos un clic y verificamos que cambia en consecuencia:

```
cy.contains("It's on!")
cy.get('.switchBtn').click()
cy.contains("It's rolling!")
cy.get('.switchBtn').click()
cy.contains("It's on!")
```

Y para terminar, simulamos una entrada de texto, simulamos un clic y verificamos que el texto de entrada se represente:

```
cy.get(".testInput").type("Testing the test")
cy.get('.printInputBtn').click()
cy.contains("Testing the test")

cy.get('.printInputBtn').click()
cy.contains("Testing the test").should('not.exist')
```

La sintaxis es ligeramente diferente a Jest, pero la idea y la estructura son más o menos las mismas.🤙