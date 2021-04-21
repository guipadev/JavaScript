// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

/*

3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed

Note
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3   // returns 'number'
typeof '3' // returns 'string'

*/