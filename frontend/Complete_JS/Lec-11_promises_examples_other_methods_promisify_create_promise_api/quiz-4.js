const fs = require("fs");
const promise = fs.promises.readFile("./f1.txt");

promise.then(scb);
promise.then(scb, fcb);
promise.then(null, fcb);
promise.finally(finallyCB);

function scb(data) {
  console.log("Hi the data is " + data);
}
function fcb(error) {
  console.log("inside catch", error.message);
}

function finallyCB() {
  console.log(" I will be called via finally");
}
