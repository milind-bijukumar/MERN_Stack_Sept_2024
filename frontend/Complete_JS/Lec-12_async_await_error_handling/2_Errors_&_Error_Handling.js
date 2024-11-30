/**

   Error: means some mistake in code to get either some issue or violating the rule in JS.

   Types of error in JS:

    1. Syntax Error: means violation the syntax in JS.

    2. Runtime Error: you will get during the execution of the program/code.

        2.1. Reference Error
        2.2. Type Error
        2.3. Range Error
        2.4. Internal Error: very generic message and doesn't specific information about that. try{}catch{} block using console.log()
        2.5. Network Error - fetch() - Will do in machine session
        2.6. DOM Exception - DOM - will do in machine code part.
 */

// let a = 10;
// console.log("Hello");

// Reference error
// console.log(a);
// let a;
// console.log("Before");
const fn = () => {
  console.log("its fn");
};
fn();

// type error

let num = 10.20345;

console.log(num.toFixed(2));

// Range Error

// const f = () =>{
//     f(); // maximum call stack size exceed overflow error
// }

// f();

// array

// let a = [];

// a.length = 100 ** 100;
// console.log(a.length);

try {
  let a = 10;
  {
    var b = 20;
    console.log("Value", a);
  }
} catch (error) {
  console.log("Error", error);
} finally {
  // mandatory functions or operation you perform here
}
