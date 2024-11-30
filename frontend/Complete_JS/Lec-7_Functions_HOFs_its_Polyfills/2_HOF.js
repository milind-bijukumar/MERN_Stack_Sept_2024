/**

    HOF (Highr Order Function):

        - HOF is function that meets one or both of the folowing criretia:

            1. It takes one or more function as an arguments.
            2. It returns a function as a result.

        - Used to create more abstract and reusable code for mapulatinf the functions. 

        - Types of HOF:
          1. Custom HOF
          2. Built-in HOF

        - Built-in HOF:
           - These functions are provided by native JS language.
           - Arrays use frequently its own HOF:

              1. forEach(): executes a function for every item in an array.
                 syntax:

                    arr.forEach(callback);
              2. filter():

                   - create a new array of elements that met the criteria of the given function.
                   - syntax: const newArr = array.filter(cb);
                  
              3. map():
                 - Execute the callback function on each element of an array. The cb fn returns a new array with the return values;
                - will create a shallow copy of an array
                - syntax : const newArr = arr.map(cb);
                 
              4. reduce():
                 - Applies function to each element of an arary to reduce to a single value.
                 - syntax: arr.reduce(cb, intialValue);
              5. sort():
                 - it's a HOF, but uses for sorting the data either in asc or desc.
                 - arr.sort(compareFunction)

 */

// How to custom HOF?

const applyOperations = (operation, a, b) => {
  return operation(a, b);
};

const add = (a, b) => a + b;

const mul = (a, b) => a * b;

const sub = (a, b) => a - b;

console.log(applyOperations(mul, 10, 20));
console.log(applyOperations(add, 20, 30));
console.log(applyOperations(sub, 1, 2));

// Built-in HOF

let cartItems = [
  { productName: "Laptop", price: 100000.0 },
  { productName: "Mobile", price: 20000.0 },
  { productName: "Tablet", price: 50000.0 },
  { productName: "Desktop", price: 80000.0 },
];
// forEach() usecase:
cartItems.forEach((item) => {
  console.log(`${item.productName}: ${item.price}`);
});

// filter usecase:
// PS: filter the data from cart items whose price is less than 1Lac

const filteredResult = cartItems.filter((item) => item.price < 100000);

// const filteredResult = cartItems.filter((item) => {
//   const result = [];
//   if (item.price < 100000) {
//     result.push(item);
//   }

//   return result;
// });

console.log(filteredResult);

// map HOF, PS: return the array of product names

const cb = (item) => {
  return item.productName;
};

// const productNames = cartItems.map((item) => cb(item));

const productNames = cartItems.map((item) => item.productName);

console.log(productNames);

// reduce, PS: add the all prices of all items and return it.

const totPrice = cartItems.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(totPrice.toString());

// to sort the data in an array

const numbers = [4, 1, 2, 3, 5];

const sortedData = numbers.sort((a, b) => b - a);

console.log(sortedData);
