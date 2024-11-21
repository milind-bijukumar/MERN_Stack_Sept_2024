/**

   Why promises are better than the callbacks?

    -> Promise can either be resolved or rejected once in  it's lifetime.
    -> Avoid the callback hell problems amd make your cod emore maintainable.
    -> Callbacks of promises always goes into the separate queue which is known as Micro task queue.

    What is micro task queue?

     -> MTQ is a component of JS engine and worked with event loop.
     -> responsible for handling the the promises callbacks and has highest priority than the callback queue.

    consclusion: MTQ has the highest priority than callback queue.

    synchrounous code (CS) > Microtask queue > callback queue 

 */

console.log("A syncronous task");

setTimeout(() => {
  console.log("B async task");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C P1 microtask queue cb");
  })
  .then(() => {
    console.log("D P1 microtask queue cb");
  });

console.log("E sync task");
