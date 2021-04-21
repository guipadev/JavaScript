// Los ciclos se utilizan para repetir
// un trozo de código varias veces

// Ejemplo ciclo infinito	

while (true){	
   console.log("Linea 1")
   console.log("Linea 1")

//WHILE

while (5 < 10){	
   console.log("Linea 1")
   console.log("Linea 2")
}

//OTRO EJEMPLO WHILE

let i = 0	//Inicializado
while (i < 5){		//Condicion
   console.log("Linea", i)
		
//Incrimentador
  i = i + 1	//Se puede reemplazar por i++ cuando incrementa de a uno
}

//CICLO FOR

for (let i=0; i < 5; i++){
    console.log("Linea", i)

   if (i == 3){
   	console.log("Quiebra el ciclo")
        break	//En vez de utilizar break es mejor hacer bien la condicion y no utilizarlo
      }
   }

//EJEMPLO ANTERIOR WHILE

let i = 0	//Inicializado
while (i < 5){		//Condicion
   console.log("Linea", i)
		
//Incrimentador
  i = i + 1	//Se puede reemplazar por i++ cuando incrementa de a uno
}

//OTRO CICLO FOR

for (let i=0; i < 5; i++){
    console.log("Linea", i)

   if (i == 3){
   	console.log("Quiebra el ciclo")
        break	//En vez de utilizar break es mejor hacer bien la condicion y no utilizarlo
   }
} 

//OTRO EJEMPLO FOR

for (let i=0; i < 5; i++){
    if (i == 3){
       console.log("Continua con la siguiente interacción")
       continue
    }
    console.log("Linea", i)
} 

//OTRO EJEMPLO FOR

for (let i=0; i < 5; i++){
    if (i == 3){
       console.log("Continuamos con el proceso")
       }else {
	console.log("Linea", i) 
	}
    } 


//CICLO DO WHILE

do {
   console.log("Linea")    
}while (false)
