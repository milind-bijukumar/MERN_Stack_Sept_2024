/**
   
     What is the idea of using Functional Programming?

      - FP is a paradigm that focuses on writing code using pure functions, immutable data and higher order function to write predictable and maintainable code.

      - These are core ideas using functional programming.

      1. Pure functions: 
        - Functions that always produce same output for the given same input and have no side effects(no alteration on any state outside the function).

      2. Immutability:
        - Data is immutable, once it is created , it can't be changed.

      3. Declarative Programming:

       - DP, focuses on program goals not the implementation. This focused on the desired results not the execution details.

       eg: 

         Imperative approach:
           - let results = [1,2,3,4,5];
             let evenArr = [];
             for(let i=0; i<results.length; i++) {
                if(results[i]%2 === 0){
                  evenArr.push(results[i]);
                }
             
              }

  
         Declarative approach:  
          - const evenArr = results.filter(num => num % 2 ===0);

        4. Function First:

           - only writing your code using functions.

        5. Function composition:
           - Combining smaller functions to build acomplex function this way you can follow the modular approach
        
        6. HOF: Functions that takes an another function as arguments or returms the them as results. There couple of HOFs like forEach(), filter(), map(), sort()

        7. Recursion:
           Use recursive functions without any loops.

    
    What is function?

      - A reusable block of code that perofms a specific task.
      - PS: WAP to draw and colors a rectangle.

            to solve this problem, will create 2 functions:
            1. a function to draw a rectangle
            2. second function to fill the colors.

       - How to write a function in JS?

         syntax:

           function functionName(arg1, arg1, ..., argN) {
              // write your logic inside the function only

              return a certain result           
           }

        - Types of functions:

           1. Normal function: A function decalre with function keyword and a function name.

                 function functionName(arg1, arg1, ..., argN) {
                    // write your logic inside the function only

                    return a certain result           
                }

            2. Arrow Function:

               - was introduced in ES6.
               - A compact syntax od writinf a function, commonly used for one liner function.
               - syntax: const mul = (a,b) => a*b;

            3. Function Expression:

               - A function is assigned to a variable is known as function expression. 

            4. Recursive function:

               - A function that calls itself utile a base condition is met.

            5. callback function:

               - When a function is passed as an argument and invoked inside another function. It is called as callback function(cb).
               - It is used to handle the async operations like handling data after fetch the results from the API.  

            6. HOF (Highr Order Function):

               - HOF is function that meets one or both of the folowing criretia:

                 1. It takes one or more function as an arguments.
                 2. It returns a function as a result.

                - Used to create more abstract and reusable code for mapulatinf the functions. 


 */

// normal function
function fn(a, b) {
  console.log("a=", a, "b=", b);
}

fn(2, 3);

// function mul(a, b) {
//   return a * b;
// }

// console.log(mul(2, 3));

// arrow function
const mul = (a, b) => a * b;

console.log(mul(2, 3));

// function expression
// const greetMsg = function (name) {
//   console.log(`Welcome, ${name}`);
// };

const greetMsg = (name) => {
  console.log(`Welcome, ${name}`);
};

greetMsg("Ashwani Rajput");

// recursive function

const fact = (n) => {
  // 5x4x3X2x1
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
};

console.log(fact(10));

// callback function
const userProfile = (name, callback) => {
  console.log(`Hello`, name);
  callback(); // sayGoodMoring();
};

const sayGoodMorning = () => {
  console.log("Good Morning");
};

userProfile("Ashwani Rajput", sayGoodMorning);

const getData = (url, cb) => {
  const data = "Some data"; // after making an API call
  cb(data);
};

const processData = (data) => {
  console.log("Processing", data);
};

getData("https://typihead.com/api/users", processData);
