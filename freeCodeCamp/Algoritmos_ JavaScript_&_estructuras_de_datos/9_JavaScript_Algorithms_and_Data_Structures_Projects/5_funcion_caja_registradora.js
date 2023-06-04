/*
Caja registradora

Diseña una función checkCashRegister() que acepte 
- primer argumento (price), el precio de compra  
- segundo argumento (cash), la cantidad pagada  
- tercer argumento (cid), el dinero en efectivo que tiene la caja 

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

Devuelve:

{status: "INSUFFICIENT_FUNDS", change: []} 

si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

Devuelve:

{status: "CLOSED", change: [...]} 

si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

En cualquier otro caso, devuelve:

{status: "OPEN", change: [...]}

con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Ejemplo tabla, para el arreglo:

Unidad Monetaria	  Importe
Penny	              $0.01 (PENNY)
Nickel	            $0.05 (NICKEL)
Dime	              $0.1 (DIME)
Quarter	            $0.25 (QUARTER)
Dollar	            $1 (ONE)
Five Dollars	      $5 (FIVE)
Ten Dollars	        $10 (TEN)
Twenty Dollars	    $20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

A continuación, un ejemplo del efectivo en caja en formato de arreglo:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

Estructura de la función:

function checkCashRegister(price, cash, cid) {
  let change;
  return change;
}


let price = 19.5
let cash = 20
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

checkCashRegister(price, cash, cid);

// Resultado esperado un Objeto:

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// Resultado esperado: {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// Resultado esperado: debería {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// Resultado esperado: {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// Resultado esperado: {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// Resultado esperado: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

*/

function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 },
  ];

  let changeDue = cash - price;
  let change = [];
  let totalCID = 0;

  // Calcular el total del efectivo en caja (totalCID)
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  // Si el total del efectivo en caja es igual al cambio adeudado, el estado es "CLOSED"
  if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Si el total del efectivo en caja es menor que el cambio adeudado, no hay suficiente dinero en caja
  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Calcular el cambio a entregar
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const currencyName = currencyUnits[i].name;
    const currencyValue = currencyUnits[i].value;
    let currencyAmount = cid[i][1];
    let currencyCount = 0;

    while (changeDue >= currencyValue && currencyAmount > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100;
      currencyAmount -= currencyValue;
      currencyCount += currencyValue;
    }

    if (currencyCount > 0) {
      change.push([currencyName, currencyCount]);
    }
  }

  // Si no se puede devolver el cambio exacto, el estado es "INSUFFICIENT_FUNDS"
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

let price = 19.5;
let cash = 20;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

console.log(checkCashRegister(price, cash, cid));

let test2 = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(test2);
//  {status: "OPEN", change: [["QUARTER", 0.5]]}

let test3 = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(test3);
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
