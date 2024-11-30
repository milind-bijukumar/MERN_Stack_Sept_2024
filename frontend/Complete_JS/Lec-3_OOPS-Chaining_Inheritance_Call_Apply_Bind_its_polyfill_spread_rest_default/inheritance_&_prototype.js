/**
    What is the inheritance?

       - means re-usability

       - It's a mechanism where one object can inherit the properties and methods of another object. 

       - now lets understand how it works in JS?

           let obj = {};
           console.log(obj);

        - JS uses the prototype to implement inheritance

        What is prototype in JS?

        - Each object has a prototype and the custom objects can inherit the properties and methods from their prototype.

        - A prototype is an object that links to a particular object by default;

        - In JS, every object has its own internal property called [[prototype]], which references to object or null

        - But this internal property [[prototype]]: Array/Object can't be accessed directly, So to access it you have to use "__proto__"

        What is the prototypal inheritance?
        
         - It allows you the objects to inherit the properties and methods from their prototypes.

         What are the benefits of prottypal inheritance in JS?

           1. Reuse the code
           2. save the memory
           3. save the time and efforts.
           4. Multiple child objects cn access the single or all methods of parent object
 
 */

// const person = {
//   name: "Prakash",
//   age: 28,
// };

// console.log(person.name);
// console.log(person.hasOwnProperty("designation")); // false
// console.log(person.hasOwnProperty("name")); // true

// obj -> [[prototype]]: Object

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

// console.log(arr.push(10));

// console.log(arr);

// arr -> [[prototype]]: Array -> [[prototype]]: Object

// prototypal inheritance

const arr = [1, 2, 3, 4, 5]; // 15
const arr1 = [10, 20, 30, 40, 50]; //150

arr.sum = function () {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  console.log(sum);
};

//arr.sum(); //15

//arr1.sum(); //150

const arr3 = [100, 200];

Array.prototype.sum = function () {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  console.log(sum);
};

arr.sum();
arr1.sum();
arr3.sum();
console.log(arr);
