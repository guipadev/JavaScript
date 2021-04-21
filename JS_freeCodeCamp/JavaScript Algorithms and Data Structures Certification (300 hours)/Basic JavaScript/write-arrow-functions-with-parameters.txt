/*
ES6: Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function.

// doubles input value and returns it
const doubler = (item) => item * 2;
If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

// the same function, without the argument parentheses
const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
*/

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));