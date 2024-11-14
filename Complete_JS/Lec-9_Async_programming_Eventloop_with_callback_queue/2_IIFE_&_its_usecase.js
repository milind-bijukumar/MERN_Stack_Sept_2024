/**
   
   What is IIFE?

    - IIFE(Immediately Invoked Function Expression).
    - When a function is immediately invoked after it is defined.

    - usecase of IIFE:

       1. make your data private (Encapsulation)
       2. module reveal Design Pattern
 */

//Syntax:

(function () {
  console.log("Hey i am IIFE");
})();

// usecase of IIFE

export const module = (function () {
  const privateData = "dummy data";

  const privateFn = () => {
    console.log(privateData);
  };

  const publicMethod = () => {};

  const init = () => {
    privateFn();
  };

  return {
    init, // public function
    publicMethod,
  };
})();

module.init();
