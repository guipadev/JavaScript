const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  if (typeof taxBoolean !== "boolean") {
    console.log("You need to pass a boolean to the getPrices call!");
    return;
  }

  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;

    if (taxBoolean === true) {
      finalPrice = dishData[i].price * tax;
    } else {
      finalPrice = dishData[i].price;
    }

    console.log(
      "Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2)
    );
  }
}
// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }

    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}
// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

/*
Passed: getPrices method applies tax when taxBoolean parameter is true
Passed: getPrices method does not apply tax when taxBoolean parameter is false
Passed: getPrices method logs expected error message when taxBoolean is not supplied
Passed: getDiscount method when tax is applied and guests less than 5
Passed: getDiscount method when tax is applied and guests more than 5
Passed: getDiscount method when tax is not applied and guests less than 5
Passed: getDiscount method when tax is not applied and guests more than 5
Passed: getDiscount method logs expected error message when guests count not in range
*/
