/**
    queueMicrotask():

       - introduced in ES11(2020)
       - It schedules a callback to execture in microtask queue, immediately after current script completes but before rendering to marcotasks/callback queue/ task queue.

       synchrounous code (CS) > queueMicrotask() > Microtask queue > callback queue 
 */

console.log("A syncronous task");

setTimeout(() => {
  console.log("B async task");
}, 0);

queueMicrotask(() => {
  console.log("F of queueMicrotask() function");
});

Promise.resolve()
  .then(() => {
    console.log("C P1 microtask queue cb");
  })
  .then(() => {
    console.log("D P1 microtask queue cb");
  });

console.log("E sync task");
