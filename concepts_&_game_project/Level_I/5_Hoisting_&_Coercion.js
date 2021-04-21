/*
HOISTING

Es cuando las variables o funciones son declaradas antes de ser procesadas o creadas
Existe en versiones ES5 y anteriores con las palabras var y function
De la version ES6 en adelante no sucede ya se utiliza let y const
*/

//HOSTING EN VARIABLE
console.log(tiempo);	//undefined, establece ese valor por defecto al no haber establecido el valor de variable

var tiempo = "lluvia";

console.log(tiempo);	//lluvia

//Lo apropiado es definir la variable antes de invocarla


//HOISTING EN FUNCION

tormenta();

function tormenta(){
	return "llueve mucho "+verdad;
};

//"llueve mucho undefined"

var verdad = "verdad";


//HAY QUE DECLARAR TODAS LAS FUNCIONES ANTES DE LLAMARLAS

tormenta();

var cool = "prueba";

function tormenta(){
	return "llueve mucho" + verdada+ "" + cool;
};

var verdada = "verdad";

//"llueve mucho undefined undefined"


//OTRO EJEMPLO DE ERROR POR NO DECLARAR PRIMERO LA FUNCION
baile();

function baile(){
	return `me gusta mucho ${dance}`;
};

var dance = "bailar";

//"me gusta mucho undefined"


//LA FORMA CORRECTA
var dances = "cumbia";

bailes();

function bailes(){
	return `me gusta mucho el folklor de ${dances}`;
};

//"me gusta mucho el folklor de cumbia"


//AQUI OTRO ERROR POR NO DECLARAR LA FUNCION PRIMERO
prueba();
var decision = "SI";

function prueba(){
    return `vamos a ver si pasa la prueba ${decision} segunda prueba ${veremos}`;
}
var veremos = "NOSE";

//"vamos a ver si pasa la prueba undefined segunda prueba undefined"


/*
COERCION
IMPLICITA que cambia tipo de valor a otro tipo de valor, ejemplo de numero a string o al contrario
EXPLICITA cambia un tipo de valor a otro tipo de valor, pero de forma forzada a mi gusto
*/

var prueba = 4 + "12";

prueba //"412"

Number(prueba);	//412

typeof prueba;	//"string"

//EJEMPLO DE COERCION EXPLICITA PARA FORZAR CAMBIO VALOR DE VARIABLE

var ejemplo = Number(prueba);

ejemplo;	//412

typeof ejemplo;	//"number"



//EJEMPLO IMPLICITA
var numero = 10;
var numero_string = "10";
var resultado = numero + numero_string;	//realiza contatenacion por que son de diferentes tipo de valores

resultado;	//"1010"
typeof resultado;	//"string"

//EJEMPLO EXPLICITA
var resultado_numero = Number(resultado);	//forzar cambiar a tipo numero
resultado_numero;	//1010
typeof resultado_numero;	//"number"

