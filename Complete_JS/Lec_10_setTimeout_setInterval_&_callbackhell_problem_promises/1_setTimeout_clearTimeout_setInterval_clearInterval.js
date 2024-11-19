/**
    Quick Recap of Async Programming:

      1. Async Programming:
         - It's way of writing code that allows the tasks/functions to execute without blocking the execution of the rest of code.

         - It helps to use the resources and make repsonsiveness in a efficient way.

      2. synchronous code:
          - the code that executes line by line or sequetially.
          - sync code is abocking code.

      3. async code:
          - a non-blocking code, it allows you to execute multiple tasks/functions simultaneoulsly without waiting for each task to get finished before moving on to the next one.

       4. Enviornments:

           Browser:

              - Web APIs: These ar ethe features provided by browser env not the part of JS.
                 - setTimeout
                 - clearTimeout
                 - setInterval
                 - clearInterval
                 - console
                 - document
                 - fetch API
            
            NodeJS:
                - Node APIs:

                  - modules:
                     1. fs
                     2. http
                     3. os
                     4. events
                   - process
                   - global 


        1. setTimeout(): 
            - it's a built-in method provided by web APIs not the part JS.

            - It execute the function after some delay.

            - It returns a timerId (+ve number)

            - syntax:
               setTimeout(cb, dealy)

        2. clearTimeout():
            - built-in method provided by web APIs not the part of JS.

            - It is used to stop the execution of the function provided by setTimeout.

            - syntax:

               clearTimeout(timerId);

        3. setInterval(): 

           - It is used to execute a task/fn after some delay but repeatedly.
           - setInterval(cb, delay);
           - returns the timerId.

        4. clearInterval():

            - it will stop the execution the of a function provided by setInterval.
            - clearInterval(timerId)

        Usage of setInterval:

         1. to build the carousal
         2. Geolocation API 
             - for a MAX_RETRY 3 times, the after you can show some error pop-up to the user.
         3. for building a timer -> used for re-send OTP purpose

 */

console.log("Before");

const cb = () => {
  console.log("Hey i am callback fn");
};

//setTimeout and clearTimeout
// const timerId = setTimeout(cb, 3000);
// const MAX_RETRY = 3;
// if (MAX_RETRY === 3) {
//   clearTimeout(timerId);
// }

//console.log(timerId);

//setInterval and ClearInterval

const timerId = setInterval(cb, 1000);

//clearInterval(timerId);

const cancelInterval = () => {
  console.log("I am cancellening the interval");
  clearInterval(timerId);
};

setTimeout(cancelInterval, 4000);

console.log("After");
