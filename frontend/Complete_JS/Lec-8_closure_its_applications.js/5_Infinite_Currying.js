/***
    Application of closure:

      1. Currying and infinite currying
      2. How to memoize a function?
      3. IIFE and its usecase.

    1. currying function:

        - add(1,2,3) -> add(1)(2)(3)
        - It is a technique in FP, that convets a multi-arguments function into a sequence of single argument function.
    
 */

// const add = (...args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// };

// console.log(add(1, 2, 3));

// currying function

// const add = (a) => {
//   //1
//   return function (b) {
//     //2
//     return function (c) {
//       // 3
//       return a + b + c; // 6
//     };
//   };
// };

// console.log(add(1)(2)(3)); //6

// Infinite Currying

// add(1)(2)(3)(4)(5)();

const add = (a) => {
  return function (b) {
    if (b) {
      return add(a + b);
    }

    return a;
  };
};

console.log(add(1)(2)(3)(4)(5)(6)()); //15 + 6 = 21

// Real usecase can be use in async programming for making the APIs call:

/**
    fetchData(endPointURL) {
       // making an API call and fetch res from DB, fetch
       // you are displaying the data on the browser
   
   }


   fetchUserData(usersEndpoint);

   fetchPostData(postEndpoint);

 */

//  fetchUserData(url).then((userData)=>{
//     console.log(userData);

//     if(userData) {
//         // return fetch postdata
//     }
//  })
