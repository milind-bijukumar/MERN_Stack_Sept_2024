/**
    What is the scope in JS?

      - Refers to the region of the code where the variables can be accessed and modified.

      - 3 types of scopes in JS:

        1. Global Scope:

            - when a variables are declared outside the functions or a block which is known as block scope.

            - They can be accessed from anywhere in  the code, within the functions also.

        2. Function Scope(Local Scope):
           
            - When the variables are declared within the functions that is known is function or local scope.

            - Variables are accessible within the functions.

        3. Block Scope:

            - introduced in ES6, when used the let and const.
            - when variables are declared using let and const that becomes the block scope.
            - These variables are accessible within that block.

 */

// let a = 10; // global vaibale

// function print() {
//   let b = 20;

//   console.log(b);
//   console.log(a + b);

//   let c = 30;

//   if (c) {
//     let d = 40;
//     console.log(d);
//   }
//   console.log(d);
// }

// print();

/**
   What is hoisting?

     - Hoisting in JS is a concept where the variables and functions decalration moves at the top.
     

 */

let a = 10; // global vaibale

function print() {
  var d = undefined;
  let b = 20;

  console.log(b);
  console.log(a + b);

  let c = 30;

  if (c) {
    d = 40;
    console.log(d);
  }
  console.log(d);
}

print();
