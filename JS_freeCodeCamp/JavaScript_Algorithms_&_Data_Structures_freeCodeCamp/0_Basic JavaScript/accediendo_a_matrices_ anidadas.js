/*
JavaScript básico: acceder a matrices anidadas
Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como matrices anidadas. 
De manera similar al acceso a objetos anidados, la notación de corchete de matriz se puede encadenar para acceder a matrices anidadas.

Aquí hay un ejemplo de cómo acceder a una matriz anidada:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

Recupere el segundo árbol de la variable myPlants utilizando la notación de punto de objeto y corchete de matriz.


*/

var myPlants = [
	{
    
	 type: "flowers",

    	 list: [
"rose", "tulip", "dandelion"]
	},
  
	{

    	 type: "trees",

	 list: ["fir", "pine",
 "birch"
]

  	}

];





var secondTree = myPlants[1].list[1]; 



/*
Hint 1
Accessing elements within an array using bracket notation []

var fruitBasket = ["apple", "banana", "orange", "melon"];
var favoriteFruit = fruitBasket[2];

console.log(favoriteFruit); // 'orange'
In this example, our favourite fruit is ‘orange’ which is at index 2 in the fruitBasket array. Using braket notation, we assign index 2 of the fruitBasket array to favoriteFruit. This makes favoriteFruit equal to ‘orange’.

Hint 2
Accessing objects within arrays using braket [] and dot . notation

var garage = [
  {
    type: "car",
    color: "red",
    make: "Ford"
  },
  {
    type: "motorbike",
    color: "black",
    make: "Yamaha"
  },
  {
    type: "bus",
    color: "yellow",
    make: "Blue Bird"
  }
];

var busColor = garage[2].color; // 'yellow'
*/
