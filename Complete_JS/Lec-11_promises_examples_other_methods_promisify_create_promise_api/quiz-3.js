const fs = require("fs");
const promise = Promise.resolve(10);

promise
  .then((data) => {
    console.log("92", data); // 92 10
  })
  .then((firstThenVal) => {
    // undefined
    console.log("113", firstThenVal); // 113 undefined
    return 100;
  })
  .then((secondThenVal) => {
    // 100
    console.log("116", secondThenVal); // 116 100
    return fs.promises.readFile("./f1.txt"); // hey i am the content of f1 file.
  })
  .then((thirdThen) => {
    // hey i am the content of f1 file.
    console.log("120 " + thirdThen); // 120 hey i am the content of f1 file.
    return 100;
  })
  .finally(() => {
    console.log("stopping here");
  });
