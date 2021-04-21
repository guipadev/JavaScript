/*
Basic JavaScript: Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
Here is an example of a simple reverse alphabet lookup:
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
________________________________________
Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");




*/

// Setup


function phonetic
Lookup(val) {
  
	var result = "";

 
	var lookup = {
    
		"alpha": "Adams",
    
		"bravo": "Boston",
    
		"charlie": "Chicago",
    
		"delta": "Denver",
    
		"echo": "Easy",
    
		"foxtrot": "Frank"
  
		};


// After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.

  

	result = lookup[val];

  

	return result;

}


phoneticLookup("charlie");
