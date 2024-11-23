const runMlalgo = (amount, cb) => {
  console.log("running ml algo");
  console.log("processing payment");
  setTimeout(function () {
    console.log("payment done");
    cb();
    cb();
    cb();
    cb();
    cb();
  }, 1000);
};

const pRunMlalgo = () => {
  return new Promise((resolve, reject) => {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
      console.log("payment done");
      reject();
      resolve();
    }, 1000);
  });
};

module.exports = {
  runMlalgo,
  pRunMlalgo,
};
