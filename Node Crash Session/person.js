// const person = {
//   name: "Manuel Rodriguez",
//   age: 26
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}
module.exports = Person;

const person1 = new Person("Nikita Elizarov", 22);
person1.greeting();
