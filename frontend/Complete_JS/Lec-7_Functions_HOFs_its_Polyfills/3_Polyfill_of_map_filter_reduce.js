/**

  Polyfill of HOF:
  1. filter(cb)
  2. map()
  3. reduce()

 */

// polyfill of map

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    let res = callback(this[i]);
    newArr.push(res);
  }

  return newArr;
};

let cartItems = [
  { productName: "Laptop", price: 100000.0 },
  { productName: "Mobile", price: 20000.0 },
  { productName: "Tablet", price: 50000.0 },
  { productName: "Desktop", price: 80000.0 },
];

const productData = cartItems.myMap((item) => {
  return item.productName;
});

console.log(productData);

// Assignemnt write the polyfill of filter

Array.prototype.myFilter = function (cb) {
  // wirte your logic
};

// Ployfill of reduce

let numbers = [1, 2, 3, 4, 5];

const sum = (acc, elem) => {
  return acc + elem;
};

const product = (acc, elem) => {
  return acc * elem;
};

const sumVal = numbers.reduce(sum);
console.log(sumVal);

const prodVal = numbers.reduce(product);
console.log(prodVal);

function reducer(arr, cb) {
  let acc = 1;

  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }

  return acc;
}

const sumValue = reducer(numbers, sum);
console.log(sumValue);

const prodValue = reducer(numbers, product);
console.log(prodValue);

Array.prototype.myReduce = function (cb, intialVal) {
  let acc = intialVal !== undefined ? intialVal : this[0];

  let sidx = intialVal !== undefined ? 0 : 1;

  for (let i = sidx; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }

  return acc;
};

const totPrice = cartItems.myReduce((acc, item) => acc + item.price, 0);
console.log(totPrice);

const prodVal1 = numbers.myReduce(product);
console.log(prodVal1);

const sumVal1 = numbers.myReduce(sum);
console.log(sumVal1);
