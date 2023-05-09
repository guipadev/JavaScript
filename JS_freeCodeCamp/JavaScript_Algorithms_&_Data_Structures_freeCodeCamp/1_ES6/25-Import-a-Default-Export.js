/*
En el último desafío, aprendiste sobre export defaulty sus usos. 
Para importar una exportación predeterminada, debe usar una import sintaxis diferente. 
En el siguiente ejemplo, add es la exportación predeterminada del math_functions.js archivo. 
Aquí está cómo importarlo:

import add from "./math_functions.js";

La sintaxis difiere en un lugar clave. El valor importado, add, no está entre llaves ({}). 
add aquí hay simplemente un nombre de variable para cualquiera que sea la exportación 
predeterminada del math_functions.js archivo. 
Puede usar cualquier nombre aquí al importar un valor predeterminado.

En el código siguiente, importe la exportación predeterminada del math_functions.js archivo, 
que se encuentra en el mismo directorio que este archivo. 
Dale a la importación el nombre subtract.

subtract(7,4);
*/
import subtract from "./math_functions.js";

subtract(7, 4);
