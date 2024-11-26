/**

    ES6 data types:

    1. Big int: to deal with abigger number then you need to use bigint, to differentiate froma normal number you need to put n after each number

    2. Symbol: In JS, Symbol is introduced in ES6. If you would like to create a unique and immutable value/identifiers then you go with Symbol.




 */

const num1 = 12432534534654654756776238563475648n;
const num2 = 547347367365636535635n;

console.log(num1 + num2);

const s1 = "hello";
const s2 = "hello";

console.log(s1 === s2); // true

const str1 = Symbol("hi");
const str2 = Symbol("hi");

console.log(str1 === str2);

const symbol1 = Symbol("designation");

const person = {
  name: "Ashwani Rajput",
  age: 30,
  [symbol1]: "Full stack JS Developer",
};

console.log(person["age"]);

person[symbol1] = "Software Engineer";

console.log(person[symbol1]);
