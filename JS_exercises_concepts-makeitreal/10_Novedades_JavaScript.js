// TRUTHY Y FALSY VALUES

//Evalua a false
/*
0
""
null
unfefined
*/

//Evalua a true
/*
Cualquier numero diferente de 0
Cualquier cadena no vacia
Un arreglo o un objeto
*/


if(){
  console.log("Evalua a true")
}else{
  console.log("Evalua a false")
}

//Evaluar mejor con === para realizar comparaciones
5 == "5"  //true
5 === "5" //false

//EMACScript 2015 o ES6 -> ES Next

//PARAMETROS POR DEFECTO

function makeRequest(url, timeout=2000, callback=function() {}){
  // the rest of the function
}

//Ejemplo llamando paratro por defecto
makeRequest("/foo");

makeRequest("/foo", 500);

makeRequest("/foo", 500, function(response){
  // do something
});


//METODOS CONCISOS

var person = {
    name: "German",
    sayName: function(){
       console.log(this.name);
    }
};

//Ejemplo como queda mas conciso

var person = {
    name: "German",
    sayName(){
       console.log(this.name);
    }
};


//CLASES
//Esta es una forma creada para las personas que vienen de otros lenguajes
//Orientado a Objetos como Java, C#... para que les sea más familiar
//Pero es igual a la forma de utilizar funciones constructoras
//y se utiliza new en vez protoype

class Person {
  
  constructor(name){
     this.name = name;
  }
  
  sayName(){
     console.log(this.name)
  }
}

let person = new Person("Lulu");
person.sayName();  //imprime "Lulu"

//EJEMPLO DE LO MISMO, PERO DE FORMA DE FUNCION CONSTRUCTORA
//Las clases son sólo azúcar sintáctica sobre las funciones constructoras

let Person = function(name){
  this.name = name;
};

Person.prototype.sayName = function(){
  console.log(this.name);
}

//DESTRUCTURACIÓN
//Definir variables de parte de un objeto o un arreglo

let [a, b] = [1, 2, 3, 4]
console.log(a) //1
console.log(b) //2

let {a, b} = {a:1, b:2, c:3}
console.log(a) //1
console.log(b) //2















