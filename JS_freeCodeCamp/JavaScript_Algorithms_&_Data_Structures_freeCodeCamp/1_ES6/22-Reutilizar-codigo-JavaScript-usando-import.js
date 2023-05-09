/*
import le permite elegir qué partes de un archivo o módulo cargar. 
En la lección anterior, los ejemplos export add del math_functions.jsarchivo. 
Así es como puede importarlo para usarlo en otro archivo:

import { add } from './math_functions.js';

Aquí, import encontrará add en math_functions.js, importará solo esa función para 
que la use e ignore el resto. 
Le ./dice a la importación que busque el math_functions.js archivo en la misma carpeta 
que el archivo actual. 
La ruta de archivo relativa (./) y la extensión de archivo (.js) son necesarias cuando 
se usa la importación de esta manera.

Puede importar más de un elemento del archivo agregándolos en la import declaración como esta:

import { add, subtract } from './math_functions.js';

Agregue la import declaración adecuada que permitirá que el archivo actual use las funciones 
uppercaseString y lowercaseString que exportó en la lección anterior. 
Estas funciones están en un archivo llamado string_functions.js, que está en el mismo directorio 
que el archivo actual.

uppercaseString("hello");
lowercaseString("WORLD!");
*/

import { uppercaseString, lowercaseString } from "./string_functions.js";

uppercaseString("hello");

lowercaseString("WORLD!");
