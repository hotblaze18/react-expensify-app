const person = {
  name: "Pranav",
  age: 19,
  location: {
    city: "Vadodara",
    temp: 35
  }
};

const { name = "Anonymus", age } = person;

console.log(`${name} is ${age}`);
