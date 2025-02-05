/*
Una promesa tiene tres estados: pending, fulfilled y rejected. 
La promesa que creaste en el último desafío está bloqueada para siempre en el pending estado
porque no agregaste una forma de completar la promesa. 
Los parámetros resolvey reject proporcionados al argumento de la promesa se utilizan para hacer esto. 
resolve se usa cuando quiere que su promesa tenga éxito y reject se usa cuando quiere que falle. 
Estos son métodos que toman un argumento, como se ve a continuación.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

El ejemplo anterior usa cadenas para el argumento de estas funciones, pero en realidad puede ser 
cualquier cosa. 
A menudo, puede ser un objeto del que usaría datos para colocarlo en su sitio web o en otro lugar.

Haga que la promesa maneje el éxito y el fracaso. 
Si response FromServeres true, llame al resolve método para completar con éxito la promesa. 
Pase resolve una cadena con el valor We got the data. 
Si responseFromServeres false, use el reject método en su lugar y pásele la cadena: 
Data not received.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
*/

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
