// 1. What will print out when the following code runs?

const meal = ["soup", "steak", "ice cream"];

let [starter] = meal;

console.log(starter); // soup

// 2. The for-of loop works for Object data types.
// false

// 3. What will print out when the following code runs?

let food = "Chocolate";

console.log(`My favourite food is ${food}`); // My favourite food is Chocolate

// 4. What values will be stored in the  set  collection after the following code runs?
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
// {1, 2, 3}

// 5. What value will be printed out when the following code runs?

let obj = {
  key: 1,
  value: 4,
};

let output = { ...obj };

output.value -= obj.key;

console.log(output.value); // 3

// 6. What value will be printed out when the following code runs?

function count(...basket) {
  console.log(basket.length);
}

count(10, 9, 8, 7, 6); // 5
