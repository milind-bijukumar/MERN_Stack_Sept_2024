/**

  What is nested closure?

     - A nested closure means a function within a function.

     - When you have an inner function inside the outer function, but the inner function can still access the variables and data from the outer function even if the outer function have finished its execution.  
 */

let iamNGEC = 100;

function getFirstName(firstName) {
  console.log("I have got my first name", firstName);

  return function getLastName(lastName) {
    console.log("I have got your last name", lastName);

    return function greetMsg() {
      console.log(`Hi I am ${firstName} ${lastName}`);
      console.log("Hi NGEC", iamNGEC);
    };
  };
}

const firstNameRFn = getFirstName("Ashwani");

const lastNameRFn = firstNameRFn("Rajput");

lastNameRFn();
