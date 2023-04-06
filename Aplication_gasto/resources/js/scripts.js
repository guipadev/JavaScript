//Obtener informacion del formulario
const form = document.getElementById("transactionForm");

form.addEventListener("submit", function(event) { //invocar funcion event, cuando presionamos el boton
    event.preventDefault(); //se ejecuta el evento para No recargar la pagina
    //Se crea objeto con la inf. del formulario
    let transactionFormData = new FormData(form);
    //Guarda en variable el objeto
    let transactionObj = convertFormDataToTransactionObj(transactionFormData);
    saveTransactionObj(transactionObj);
    //Invoca funcion para guardar datos en la table
    insertRowInTransactionTable(transactionObj);
    form.reset();
});

//Despues que se cargue el contenido del DOM se ejecuta
document.addEventListener("DOMContentLoaded", function(event) {
    //Obtener del local y convertir a array
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"))
        //Recorrer y obtener todo el array
    transactionObjArr.forEach(
        function(arrayElement) {
            insertRowInTransactionTable(arrayElement) //Elementos obtenidos insertar en tabla
        }
    )
})

//Genera ID
function getNewTransactionId() {
    let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
    let newTransactionId = JSON.parse(lastTransactionId) + 1;
    localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId))
    return newTransactionId;
}

//Funcion convertir datos formulario en un objeto
function convertFormDataToTransactionObj(transactionFormData) {
    let transactionType = transactionFormData.get("transactionType");
    let transactionDescription = transactionFormData.get("transactionDescription");
    let transactionAmount = transactionFormData.get("transactionAmount");
    let transactionCategory = transactionFormData.get("transactionCategory");
    let transactionId = getNewTransactionId();
    return {
        "transactionType": transactionType,
        "transactionDescription": transactionDescription,
        "transactionAmount": transactionAmount,
        "transactionCategory": transactionCategory,
        "transactionId": transactionId
    }
}

//Funcion introducir datos en la tabla
function insertRowInTransactionTable(transactionObj) {
    //Selection table
    let transactionTableRef = document.getElementById("transactionTable");
    //Insert file al final in table
    let newTransactionRowRef = transactionTableRef.insertRow(-1);
    newTransactionRowRef.setAttribute("data-transaction-id", transactionObj["transactionId"])
        //Insert data into table, row from position 0... declare var in principle
    let newTypeCellRef = newTransactionRowRef.insertCell(0);
    //Insert data, obtained from the respective field
    newTypeCellRef.textContent = transactionObj["transactionType"];

    newTypeCellRef = newTransactionRowRef.insertCell(1);
    newTypeCellRef.textContent = transactionObj["transactionDescription"];

    newTypeCellRef = newTransactionRowRef.insertCell(2);
    newTypeCellRef.textContent = transactionObj["transactionAmount"];

    newTypeCellRef = newTransactionRowRef.insertCell(3);
    newTypeCellRef.textContent = transactionObj["transactionCategory"];

    let newDeleteCell = newTransactionRowRef.insertCell(4);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    newDeleteCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
        let transactionRow = event.target.parentNode.parentNode; //Dar clic boton eliminar agarra toda la fila
        let transactionId = transactionRow.getAttribute("data-transaction-id"); //Agarra el id a eliminar
        transactionRow.remove(); //elimina fila html
        deleteTransactionObj(transactionId); //elimina fila del localstorage
    })
}

//Paso como parametro transactionId de la transaccion a eliminar
function deleteTransactionObj(transactionId) {
    //Obtener las transacciones del localstorage
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    //Buscar el indice/posicion a eliminar
    let transactionIndexInArray = transactionObjArr.findIndex(element => element.transactionId === transactionId)
        //ELiminar elemento de esa posicion
    transactionObjArr.splice(transactionIndexInArray, 1)
        //Convierto el objeto a json
    let transactionArrayJSON = JSON.stringify(transactionObjArr);
    //Guardar array de transaccion en formato json en local storage
    localStorage.setItem("transactionData", transactionArrayJSON);
}

function saveTransactionObj(transactionObj) {
    //Si no hay inf. en local storage ingresar array vacio
    let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];
    myTransactionArray.push(transactionObj);
    //Convertir mi array de transaccion a json
    let transactionArrayJSON = JSON.stringify(myTransactionArray);
    //Guardar mi array de transaccion en formato JSON en local storage
    localStorage.setItem("transactionData", transactionArrayJSON);
}