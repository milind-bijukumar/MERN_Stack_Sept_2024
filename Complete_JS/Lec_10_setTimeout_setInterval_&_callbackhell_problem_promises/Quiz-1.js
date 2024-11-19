/* What if we cannot block the main thread and have two files 
   to read and print the output in any manner? ->  essence of parallel task
 */

const fs = require("fs");

console.log("Before");

fs.readFile("./f1.txt", function(err, data){
    console.log("" + data);
});
fs.readFile("./f2.txt", function(err, data){
    console.log("" + data);
});


console.log("After");