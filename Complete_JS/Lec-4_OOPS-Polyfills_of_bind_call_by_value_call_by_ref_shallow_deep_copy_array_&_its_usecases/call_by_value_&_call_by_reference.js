/**

  What is call by value?

    - A function recieves a copy of actual data, so if you made any chnages inside a function on that data but thta don't afftect the original data.

    - In JS, primitive data types (such number, boolean, string) are passed by value (call by value).

    - Eg:
    const callByValue = (number) => { // here it getting copied as 5
  number++; // 5 + 1 = 6
  console.log(number); // 6
};

let number = 5; // GEC -> take separate memory number variable 

callByValue(number); // FEC -> takes separate memory for number local variable -> 5

console.log(number); // 5


  What is call be reference?

    - A function recieves a reference or memory address of actual data. So if you make any changes in the inside the function on that data then it is going to be affected or modified the original data.

    - In JS, objects and arrays are folloed the call by reference.


*/

const callByValue = (number) => {
  // here it getting copied as 5
  number++; // 5 + 1 = 6
  console.log(number); // 6
};

let number = 5; // GEC -> take separate memory number variable

callByValue(number); // FEC -> takes separate memory for number local variable -> 5

console.log(number); // 5

const callByReference = (data) => {
  for (let i = 0; i < data.length; i++) {
    data[i] *= 2;
  }
  console.log("Array inside a function", data);
};

let arr = [1, 2, 3, 4, 5];

callByReference(arr);

console.log("Array outside the function", arr);
