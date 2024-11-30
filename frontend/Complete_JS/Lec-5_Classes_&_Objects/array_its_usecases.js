/**

   What is array in JS?

    - An array in JS is built-in object (Array) which is used to store multiple values in a single variable;
    - Each values is called as an element based on the index you can accesss the values.
    
    Array as an object:

     - It has its own properties (length) and methods.

     - Need to understand about array's methods and its usecases.
     


 */

let arr = [];

console.log(typeof arr); // object

console.log(arr);

// arr -> Array(0),so this Array is having its own properties and methods

const fruits = ["banana", "apple", "kiwi"];

console.log(fruits.length); // 3

// Usecases of an array usng its most used methods:

/**
    1. slice(): Returns the shallow copy of a portion of an array, that means without modying the original array.
       
         - arr.slice(startIndex, endIndex)

    2. splice(): Add/Remove elements from an array. It modifies the original array and returns the removed elements
         -  arr.splice(startIndex, deleteCount, ...itemtoAdd)

     3. When you want to merge 2 arrays or more arrays then you use concat()

        syntax: arr1.concat(arr2);


 */

const arr1 = fruits.slice(1, 2);
console.log(arr1);

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(3, 4));
console.log(numbers);

console.log(fruits.concat(numbers));

console.log(numbers.splice(3, 4));

console.log(numbers);

console.log(fruits.join(","));

console.log(fruits.push("pomegranate"));
console.log(fruits);

console.log(fruits.pop());

console.log(fruits.unshift("Guava"));
console.log(fruits);
console.log(fruits.shift());

console.log(fruits.includes("data"));

console.log(numbers.find((num) => num >= 30));

// nested array

const nestedArr = [1, 2, [3, 4], [4, 5, [6, 7]], 8, 9, 10];

console.log(nestedArr.flat(Infinity));

const flattenArr = nestedArr.flat(Infinity);

for (let i = 0; i < flattenArr.length; i++) {
  console.log(flattenArr[i]);
}
