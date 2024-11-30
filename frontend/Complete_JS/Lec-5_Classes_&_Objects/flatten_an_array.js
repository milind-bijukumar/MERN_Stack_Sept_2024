// nested array

const nestedArr = [1, 2, [3, 4], [4, 5, [6, 7]], 8, 9, 10];

// console.log(nestedArr.flat(Infinity));

// const flattenArr = nestedArr.flat(Infinity);

// for (let i = 0; i < flattenArr.length; i++) {
//   console.log(flattenArr[i]);
// }

// IQ: can you write the logic to implement your custom function to flatten an array?

Array.prototype.flattenArray = function (depth = 1) {
  let flattened = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      flattened = flattened.concat(this[i].flattenArray(depth - 1));
    } else {
      flattened.push(this[i]);
    }
  }

  return flattened;
};

console.log(nestedArr.flattenArray(Infinity));

console.log(nestedArr);
