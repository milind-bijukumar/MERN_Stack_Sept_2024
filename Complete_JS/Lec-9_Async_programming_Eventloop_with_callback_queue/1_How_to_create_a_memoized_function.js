/**

   What is memoisation?

     - It's method that improves the function calls by saving the results of costly computations using same input arguments.

     - Memoised functions improves the performance when they are repeatedly called with same the arguments.

 */

const calc = (n) => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += n;
  }

  return sum;
};

// console.time();

// const result = calc(10000);
// console.log("result:", result);

// console.timeEnd();

// memoized a function

const memoize = (fn) => {
  let cache = {};
  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const efficientCalcFn = memoize(calc);

console.time();
const res1 = efficientCalcFn(10000);
console.log("res1:", res1);
console.timeEnd();

console.time();
const res2 = efficientCalcFn(10000);
console.log("res2:", res2);
console.timeEnd();
