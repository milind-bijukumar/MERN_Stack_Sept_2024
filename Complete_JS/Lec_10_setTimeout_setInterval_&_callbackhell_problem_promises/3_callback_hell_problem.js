/**

   1. What is callback hell problem?

     - Nesting of callbacks: We have to do the nesting of callback when we want to perform the the serial execution of async functions.

     - https://medium.com/gousto-engineering-techbrunch/avoiding-callback-hell-97734e303de1

    - can try to solve this problem by writing the code in bit more btter way.

   2. Inversion of control: creating a trust issue if we trying to cbs of third party libraries.


 */

const fs = require("fs");

console.log("Before");

const f3cb = (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content " + data);
  }
};

const f2cb = (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content " + data);
    fs.readFile("f3.txt", f3cb);
  }
};

const f1cb = (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Content " + data);
    fs.readFile("f2.txt", f2cb);
  }
};

fs.readFile("f1.txt", f1cb);

console.log("After");
