/**
  
   before understand ing the serial and parallel execution of async code, you must understand these terminologies first:

   1. synchronous: exceute the task sequentially and immediately
   2. asynchrous: execute the task after some delay.
   3. serial task: the task that are dependent on the previous one to get completed.
   4. parallel task: The tasks that run independently.

 */

// serial execution of async code

// const fs = require("fs");

// console.log("Before");

// fs.readFile("f1.txt", (err, data) => {
//   const content1 = data;
//   fs.readFile("f2.txt", (err, data) => {
//     const content2 = data;
//     fs.readFile("f3.txt", (err, data) => {
//       const content3 = data;
//       console.log(
//         "Content of both files: " + content1 + " " + content2 + " " + content3
//       );
//     });
//   });
// });

// console.log("After");

// parallel execution of async code

const fs = require("fs");

console.log("Before");

fs.readFile("f1.txt", (err, data) => {
  console.log("" + data);
});

fs.readFile("f2.txt", (err, data) => {
  console.log("" + data);
});

console.log("After");
