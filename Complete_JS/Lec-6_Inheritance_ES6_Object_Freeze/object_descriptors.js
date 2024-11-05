/**
    What is Object Descriptors?

      - Object descriptors use in JS only and is used to define and control the properties of an object.

      - You can define attributes of the properties like writable, enumerable and configurable.

      - There are 2 types of descriptors: data descriptors and accessor descriptors.

       Data descriptors:

         - value: The property's value.
         - writable: if true , the property's value can be changed else not
         - enumerable: if true, the properities can be iterated via for..in loop.
         - configurable: If true, the property descriptor can be changed and the property can be deleted.

       Accessor Descriptors:
        - get: A function that returns the property's value
        - set: A function to set the property's value
        - enumerable
        - configurable

    How to implement it?
    1. Object.defineProperty();
    2. Object.defineProperties();

 */

const person = {};

Object.defineProperty(person, "name", {
  value: "Ashwani Rajput",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "age", {
  value: 25,
  writable: false,
  enumerable: true,
  configurable: false,
});

delete person.name;

console.log(person);

person.name = "Ashwin";

console.log(person.name);

person.age = 30;
console.log(person.age);

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Assignment: POST read and do hands on it.

Object.defineProperties();
