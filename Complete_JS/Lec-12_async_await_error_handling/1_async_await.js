/**
    
  async/await:

    - Introduced in ES8(2017)

    - syntactic sugar of consuming the promises.

    - provide you a more concise and readble way of writing asynchrous code. 
    
 */

const fs = require("fs");

console.log("Before");

const promise = fs.promises.readFile("f1.txt");

// promise
//   .then((data) => {
//     console.log("Content of the file is:" + data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
const fn = async () => {
  try {
    const data = await promise;
    console.log("Content:" + data);
  } catch {
    console.log("If some error cam then it will handled here");
  } finally {
    console.log(
      "Wheteher the promise is getting reolved  or rejected, i will invoking for sure"
    );
  }
};

fn();

console.log("After");
