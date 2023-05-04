// 1. Based on the following code, what will print out when the variable  i  has the value  3 ?

if (i < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

// Hello

// 2. Based on the following code, what will print out when the variable  i  has the value  1 ?

if (i == 0 && i == 1) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

// Goodbye

// 3. How many times will the following code print the word 'Hello'?

for (i = 0; i < 2; i++) {
  console.log("Hello");
}

// 2

// 4. How many times will the following code print the word 'Hello'?

var i = 0;
while (i < 3) {
  console.log("Hello");
  i++;
}

// 3

// 5. How many times will the following code print the word 'Hello'?

for (i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    console.log("Hello");
  }
}

// 6

// 6. Based on the following code, what will print out when the variable  i  has the value  7 ?

if (i <= 5) {
  console.log("Hello");
} else if (i <= 10) {
  console.log("Goodnight");
} else {
  console.log("Goodbye");
}

// Goodnight

// 7. Based on the following code, what will print out when the variable  i  has the value  3 ?

switch (i) {
  case 1:
    console.log("Hello");
    break;
  case 2:
    console.log("Goodnight");
    break;
  case 3:
    console.log("Goodbye");
    break;
}

// Goodbye

// 8. Based on the following code, what will print out when the variable  i  has the value  3 ?

if (i == 2 || i == 3) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

// Hello
