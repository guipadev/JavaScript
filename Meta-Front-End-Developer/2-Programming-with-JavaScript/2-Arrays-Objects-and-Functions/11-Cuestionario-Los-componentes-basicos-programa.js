/*
What data type is the variable  x ?
*/

var x = {}; // Object

/*
What will be the output of running the following code?  
*/

// Uncaught SyntaxError: Invalid or unexpected token.
/*try {
    console.log('hello)
} catch(e) {
    console.log('caught')
}*/

/*
What value is printed when the following code runs?
*/

var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];

console.log(burger[2]); // lettuce

/*
In the following code, how many methods does the  bicycle  object have?
*/

// Rta 2

var bicycle = {
  wheels: 2,
  start: function () {},
  stop: function () {},
};

/*
When the following code runs, what will print out?
*/

try {
  throw new Error();
  console.log("Hello");
} catch (err) {
  console.log("Goodbye"); // Saldra este mensaje
}

/*
If you mis-type some code in your JavaScript, what kind of error will that result in?

a. RangeError
b. SyntaxErrror
c. TypeError
*/

// Rta SyntaxError

/*
Will the following code execute without an error?
*/

function add(a, b) {
  console.log(a + b);
}

add(3, "4"); // 34

/*
What will be printed when the following code runs?
*/

var result;

console.log(result); // undefined

/*
What will be the output of the following code?
*/

var str = "Hello";

str.match("jello");

// Rta null

/*
What will be the output of the following code?
*/

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error"); // Este mensaje se genera
}
