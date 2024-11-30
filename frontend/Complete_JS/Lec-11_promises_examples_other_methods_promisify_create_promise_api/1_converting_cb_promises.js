/**
    promisify: converting cb to custom promise.

       new Promise((resolve, reject)=>{
       
         if(err) {
           reject(err)
         } else {
         
          resolve(data);
         }
       
       })
      
 */

const fs = require("fs");

const promiseReadFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (data) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

const p = promiseReadFile("f11.txt");

//console.log(p);

p.then((data) => {
  console.log("Content: " + data);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("We have done the task successfully");
  });
