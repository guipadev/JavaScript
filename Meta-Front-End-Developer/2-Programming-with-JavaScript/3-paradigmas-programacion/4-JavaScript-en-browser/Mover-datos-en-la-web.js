/*
Mover datos en la web
La web moderna consta de millones y millones de páginas web, servicios conectados y bases de datos.

Hay sitios web que se comunican con otros sitios web, obteniendo datos de fuentes de datos y proveedores de datos, 
tanto de pago como gratuitos.

Todos estos flujos de datos deben facilitarse con algún tipo de formato de datos.

Alrededor de 2001, Douglas Crockford ideó un formato de intercambio de datos basado en objetos de JavaScript. 
El nombre que se le dio a este formato fue JSON, que es la notación de objetos de JavaScript.

Antes de JSON, el formato de archivo de intercambio de datos más común era  XML  (Lenguaje de marcado extensible). 
Sin embargo, debido a la sintaxis de XML, requería más caracteres para describir los datos que se enviaban. 
Además, dado que era un lenguaje independiente específico, no era tan fácil de interoperar con JavaScript.

Por lo tanto, las dos razones principales por las que el formato JSON se convirtió en el formato de intercambio 
de datos dominante que es hoy en día son dos:

- Primero, es muy liviano, con una sintaxis muy similar a "un objeto JavaScript en cadena". 
Aprenderá más sobre los detalles de esto más adelante.

- En segundo lugar, es más fácil de manejar en código JavaScript, ya que JSON, después de todo, es  solo JavaScript.

A menudo se dice que JSON es un  subconjunto  de JavaScript, lo que significa que se adhiere a las reglas de sintaxis 
del lenguaje JavaScript, pero es aún más estricto en cuanto a cómo debe formatearse el código JSON adecuado. 
En otras palabras, todo el código JSON es JavaScript, pero no todo el código JavaScript es JSON.

Además de ser un formato de intercambio de datos, JSON también es un formato de archivo. 
No es raro acceder a algunos datos de terceros desde un sitio web de terceros en nuestro propio código 
en forma de un archivo json .

Por ejemplo, si tiene un sitio web con los datos sobre los movimientos de precios de las acciones, 
es posible que desee obtener los datos de los precios actuales de las acciones de un proveedor de datos. 
Podrían ofrecer su servicio de datos brindándole acceso al archivo denominado, por ejemplo,  stockPrices.json, 
al que podría acceder desde sus servidores.

Una vez que haya descargado esos datos JSON en cadena en su propio código, podría convertir esos datos en un 
objeto JavaScript simple.

Eso significaría que podría usar el código de su aplicación web para "profundizar" en los datos de terceros 
convertidos en un objeto de JavaScript, a fin de obtener información específica basada en un conjunto 
determinado de criterios.

Por ejemplo, si los datos JSON en cadena se convirtieron en un objeto que tuviera la siguiente estructura:
*/

const currencyInfo = {
    [
        USD: {
            // ...
        },
        GBP: {
            // ...
        },
        EUR: {
            // ...
        }
    ]
}

/*
Luego, podría acceder solo a los datos en la  propiedad USD  , si eso es lo que necesitaba su aplicación en un momento dado.

Con suerte, con esta explicación, comprenderá, en un alto nivel, cómo y por qué podría querer usar JSON en su propio código.

Se trata de obtener datos JSON en cadena de un servidor, convertir ("analizar") esos datos en objetos JS en su propio código, 
trabajar con los datos convertidos en su propio código y quizás incluso convertir el resultado en JSON, 
para que estos datos está listo para, por ejemplo, ser enviado de vuelta a un servidor después de que su código 
lo haya procesado localmente.
*/

/*
JSON es solo una cadena, pero hay reglas que debe seguir

JSON es una cadena, pero debe ser una cadena con el formato correcto. 
En otras palabras, debe cumplir con algunas reglas.

Si una cadena JSON no tiene el formato correcto, JavaScript no podrá analizarla en un objeto JavaScript.

JSON puede funcionar con algunas primitivas y algunos tipos de datos complejos, como se describe a continuación.

Solo un subconjunto de valores en JavaScript se puede clasificar correctamente en JSON y analizar desde un objeto
de JavaScript en una cadena JSON.

Estos valores incluyen:
- valores primitivos: cadenas, números, bolleans, nulo
- valores complejos: objetos y matrices (¡sin funciones!)
- Los objetos tienen cadenas entre comillas dobles para todas las claves
- Las propiedades están delimitadas por comas tanto en los objetos JSON como en las matrices JSON, al igual que en el código JavaScript normal.
- Las propiedades de cadena deben estar entre comillas dobles. Por ejemplo:
"frutas", "verduras"
- Las propiedades numéricas se representan utilizando la sintaxis numérica de JavaScript habitual; p.ej
5, 10, 1.2
- Las propiedades booleanas se representan utilizando la sintaxis booleana normal de JavaScript, es decir:
verdadero y FALSO
- Null como propiedad es lo mismo que en JavaScript normal; es solamente un
nulo

Puede usar literales de objeto y literales de matriz, siempre que siga las reglas anteriores

¿Qué sucede si intenta convertir en cadena un tipo de datos que no se acepta en la sintaxis JSON?

Por ejemplo, ¿qué sucede si intenta convertir una función en cadenas? La operación fallará silenciosamente.

Si intenta codificar otros tipos de datos, como un número BigInt, digamos  123n, obtendrá el siguiente error:  
TypeError no detectado: no sé cómo serializar un BigInt .

Algunos ejemplos de cadenas JSON

Finalmente, aquí hay un ejemplo de un objeto JSON en cadena, con un solo par clave-valor:

' { "color" : "rojo" } '

Aquí hay un objeto JSON un poco más complejo:

' { "color" : "rojo" , "objeto anidado" : { "color" : "azul" } } '      

El objeto JSON anterior codifica dos propiedades:

- "color rojo"
- "Objeto anidado": { "color": "azul" }

También es posible tener una cadena JSON codificando solo una matriz:

- '["Uno, dos, tres"]'

La cadena JSON anterior codifica una matriz que contiene tres elementos, tres valores del tipo de datos de cadena. 
Obviamente, al igual que los objetos, las matrices pueden anidar otras estructuras de datos simples o complejas.

Por ejemplo:

'[{ "color": "azul" }, {"color: "rojo"}]'

En el ejemplo anterior, la cadena JSON codifica una matriz que contiene dos objetos, donde cada objeto consta
de un solo par clave-valor, donde ambos valores son cadenas.
*/