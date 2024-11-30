/**
   
   what is default parameter in JS?

    - Assigning a default value to a function parameter.

   What is spread operator in JS?

    - Spreading out the elements into individual elements of an array or an object. 

    - represented by (...) triple dots.

    - Benefits:

       -> It promotes the immutability, which means original array or an object won't get modified.

    What is rest operator in JS?

     - It is used in a function allows you to collect individual araguments into a single array.

     - Represented by (...params) or (...args)

     - Benefits:
        - Easier to work with variable-length argument lists


 */
// PS:
// function greetMsg(name) {
//   console.log(`Hello, ${name}`);
// }

// greetMsg();
// greetMsg("Ashwani");

function greetMsg(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greetMsg();
greetMsg("Ashwani");

// spread impl

const numbers = [1, 2, 3, 4, 5];

const moreNumbers = [0, ...numbers, 10, 20];

console.log(moreNumbers);

const user = { name: "Ashwani", age: 30 };

const updatedUser = { ...user, email: "ashwin.rajput87@gmail.com" };

console.log(updatedUser);
console.log(user);

// rest operator

const findMax = (...args) => {
  console.log(args);

  return Math.max(...args);
};

console.log(findMax(10, 40, 80, 89, 98)); // 80
