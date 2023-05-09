/*
catches el método utilizado cuando su promesa ha sido rechazada. 
Se ejecuta inmediatamente después de reject llamar al método de una promesa. 
Aquí está la sintaxis:

myPromise.catch(error => {
  
});

errores el argumento pasado al reject método.

Agregue el catch método a su promesa. 
Úselo error como parámetro de su función de devolución de llamada e inicie sesión error en la consola.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
*/

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

makeServerRequest.catch((error) => {
  console.log(error);
});
