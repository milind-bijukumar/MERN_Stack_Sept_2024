/**

   What is the idea behind asynchronous programming?

   - Please the notes from the ipad notes.

   - undertsnad the synchronous code and asynchronous code


 */

// sync code - the code which will excute line by line - it's blocking code

// console.log("Before");
// const fn = () => {
//   for (let i = 0; i < 1000000000; i++);
//   console.log("Hey i am fn");
// };
// fn();
// console.log("After");
/**
   o/p:

   Before
   Hey i am fn
   After

 */

// async code - non-blocking code. that allows to run the task simultaneously without waiting for each task to get completed.

console.log("Before");

const fn = () => {
  for (let i = 0; i < 1000000000; i++);
  console.log("Hey i am fn");
};

setTimeout(fn, 1000);

console.log("After");

/**
 
   b4
   After
   Hey i am fn
  
 */

/**
  
    - is console.log() is part JS PL?

       - No, it's not.
 
    - is window a part of JS PL?

       - window is an object is not actually the part of JS PL itself. These are the feartures provided by the broweser enviornment. These are called web APIs

       - Please refer the notes - browser env and nodeJS env.
  */
