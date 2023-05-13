const name = "John";
window.name = "Taylor";

const getName = () => {
  const name = "Jeft";
  return this.name;
};

console.log(getName()); // Taylor
