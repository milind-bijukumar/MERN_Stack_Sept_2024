/***
    Function as an object:

      - Function can have properties and methods like objects. 


 */

function fn() {
  console.log("Hey i am fn");
}

fn.count = 0;

fn.printFn = function () {
  console.log("count value is", this.count);
  return function inner() {
    return 5;
  };
};

console.log("count property:", fn.count);

const rFn = fn.printFn();

console.log(rFn());

fn();

// How to functions in an array?

const greetMsg = function (name) {
  console.log(`Hello, ${name}`);
};

const printData = function (data) {
  console.log("Data value", data);
};

const fnList = [greetMsg, printData];

// fnList.forEach((item, index) => {
//   console.log(item[index]);
// });

// for (let i = 0; i < fnList.length; i++) {
//   fnList[i]("Ashwani Rajput");
// }

fnList[0]("Prakash");
fnList[1]({ value: "xyz data" });

// computeAmount().lacs(2).lacs(5).value();// 700000 (Flipcart and Amazon)

const computeAmount = () => {
  let amt = 0;

  const value = () => {
    return amt;
  };

  const lacs = (amount) => {
    amt = amt + amount * 100000;
    return { value, lacs }; // Enabling the chaining by returning the object with lacs and value
  };

  return { value, lacs };
};

console.log(computeAmount().lacs(2).lacs(5).lacs(5).value());
