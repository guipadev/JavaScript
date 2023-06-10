// Task 1: Iterate over an array
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2: Iterate over an object's own properties
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let key in bird) {
    if (bird.hasOwnProperty(key)) {
      console.log(key + ": " + bird[key]);
    }
  }
}

birdCan();

// Task 3: Iterate over an object and its prototype's properties
function animalCan() {
  for (let key in bird) {
    if (bird.hasOwnProperty(key)) {
      console.log(key + ": " + bird[key]);
    }
  }
  for (let key in animal) {
    console.log(key + ": " + animal[key]);
  }
}

animalCan();
