/**

   What is array in JS?

    - An array in JS is built-in object (Array) which is used to store multiple values in a single variable;
    - Each values is called as an element based on index.
    - 



 */

let arr = [];

console.log(typeof arr); // object

console.log(arr);

// arr -> Array(0),so this Array is having its own properties and methods

const fruits = ["banana", "apple", "kiwi"];

console.log(fruits.length); // 3

// USecases of an array usng its most used methods:

/**
    1. slice():
       
         - arr.slice(startIndex, endIndex)

    2. splice():
         -  arr.splice(startIndex, deleteCount, ...itemtoAdd)


 */

const arr1 = fruits.slice(1, 2);
console.log(arr1);

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(3, 4));
console.log(numbers);

console.log(numbers.splice(3, 4));

console.log(numbers);
