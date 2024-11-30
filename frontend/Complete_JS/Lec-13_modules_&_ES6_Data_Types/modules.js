/**
   
     What is module?

       - Establish a communication among JS files with the help of methods/functions, classes and variables.

       - A module organizes your code in modular and maintainable way of breaking bigger pieces of code in smaller chunks.


       How will you communicate among different JS files?

        - In ES6, export and import keywords were introduced.

        - Imports are getting cached.

        - In JS, when a module is imported into the another JS file, the imported cotents are getting cached means you need not to invoke that particular code again, only the resulted values are going to be used.
 */

import { increment as inc, getCount } from "./utils/counter.js";

import MyCalcultor from "./utils/Calculate.js";

console.log(inc());
console.log(getCount());

const calc = new MyCalcultor();

console.log(calc.add(10, 20));

console.log(calc.sub(10, 20));
console.log(decrement());
