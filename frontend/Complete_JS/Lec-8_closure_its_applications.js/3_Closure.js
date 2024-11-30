/**

   Why closure is needed?

     - Whenever you decalare a variable inside the function then it is accessible within that function only.
     - If you try to access outside the function, it will result in a scope of error/reference error. 
   
   What is closure?

    - Closure in JS allows variables from outer scope to be preserved in inner scope using lexical scope technique.
    - In lexical scope, the of a variable is defined by its position in the source code.
    - A closure is created when a function is defined inside the another function, and the inner function access the variables from the outer function. 

    NOTE: Inner function forms the closure over outer function's variables and it's variables are present even if outer function is removed from stack.


 */

// function outerFn() {
//   const count = 0;

//   console.log(count);
// }

// outerFn();

// console.log(count);

// closure

function outerFn() {
  let count = 0;

  function innerFn() {
    count++;
    console.log(count);
  }

  return innerFn;
}

const innerFunc = outerFn();
innerFunc();
