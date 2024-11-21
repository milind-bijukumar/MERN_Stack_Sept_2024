/**


 Why should you use promise?

  - To solve the callabck hell problem.
  - To solve the inversio of control. (solve the trust issue of using third party libbaries callbacks to invoke only and only once)

  What is promise?

   - refers the notes.

   - To consume the promises we must use:
     - then-> to get the success
     - catch -> to get the error
     - finally -> to execute or invoke some madatory task

 */

const fs = require("fs");

console.log("Before");

const p1 = fs.promises.readFile("f1.txt");

// p1.then((data) => {
//   console.log("Content: " + data);
// });

// p1.catch((err) => {
//   console.log("Error", err);
// });

// setTimeout(() => {
//   console.log(p1);
// }, 2000);

// console.log("" + p1);

//Chaining of the promises
p1.then((data) => {
  console.log("Content: " + data);
  return fs.promises.readFile("f2.txt");
})
  .then((data) => {
    console.log("content: " + data);
    return fs.promises.readFile("f3.txt");
  })
  .then((data) => {
    console.log("Content: " + data);
  })
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("can execute some mandatory task");
  });

console.log("After");
