//Importando la variable del otro archivo estro Exportada
import { mostrona, nombre } from "./18-ExportarModulos";
//Podemos importar todo lo que necesitemos
import { Persona, Humano, mostrar} from "./18-ExportarModulos";
//Otra forma de importar todo, pero ocupa mas memoria ya que no se especifica
//Se le puede poner cualquier nombre como paquete(archivos... etc) no recomendable x consumo memoria
import * as paquete from "./18-ExportarModulos";


//Obtendremos la inf. de la variable nombre, sin declararla ya que es de otro archivo
console.log(nombre);

//Utilizar Interface importadas
const usuario:Humano = {nombre:'Camilo'}

//Utilizando la Funcion importadas
mostrar()

mostrona('Lebron James')

//cuando se exporta todo, para poder utilizarlo debemos llamarlo primero con el nombre
//asignado para por la importacion en este caso "paquete"
paquete.mostrar()
paquete.mostrona('Shagy Doo')