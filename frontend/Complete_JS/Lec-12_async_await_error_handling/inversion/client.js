const { runMlalgo, pRunMlalgo } = require("./lib.js");

console.log("Before");

let amount = 100;
let priceOfOneItem = 20;

const cb = () => {
  amount = amount - priceOfOneItem;
  console.log("Amount left: ", amount);
};

const p = pRunMlalgo();
console.log(p);

p.then(() => {
  cb();
}).catch((err) => {
  console.log("Error");
});

console.log("After");

// getGeoLocation() api -> function and promise

const MAX_RETRY = 3;

// if (MAX_RETRY === 3) {
for (let i = 3; i >= MAX_RETRY; i--) {
  // getGeoLcation()

  if (i === 0) {
    // show error UI
  }
}
