const { runMlalgo } = require("./lib.js");

console.log("Before");

let amount = 100;
let priceOfOneItem = 20;

const cb = () => {
  amount = amount - priceOfOneItem;
  console.log("Amount left: ", amount);
};

runMlalgo(amount, cb);

console.log("After");
