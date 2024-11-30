/**

   There are few more methods available in the promise API: all(), allSettled()

    What is race condition?

      - occurs when 2 or more async operations try to acces the same resource or modift the same data simultaneously then only the outcome will be unpredicatable.

    all():

     - takes an array of promises and return a new promise  when all input promises are fullfilled.

     - If any of the promises rejects then entirely the resulting promise will reject the other promises.
     
 
    allSettled(): 

     - takes an array of promises and return a new promise as an array of object when the respective promise are getting resolved or rejected.


 */

//const p1 = Promise.resolve("Success data 1");
const p1 = Promise.reject("Data didn't revieve successfully");
const p2 = Promise.resolve("Success data 2");
const p3 = Promise.resolve(100);

//const promise = Promise.all([p1, p2, p3]);

const promise = Promise.allSettled([p2, p1, p3]);

//console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
