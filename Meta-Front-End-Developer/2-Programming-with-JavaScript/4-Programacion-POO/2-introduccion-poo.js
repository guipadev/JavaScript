// Object-orientated programming
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};

// purcharse1 object
purchase1.totalPrice(); // 120
purchase1.stateTax; // 1.2

// purchase2 object
var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase2.shoes * purchase2.stateTax;
    console.log("Total price:", calculation);
  },
};

purchase2.totalPrice(); // 60

// Example functional programming
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);
