/**
    What is lexical scope?

      - Refers to the scope of a variable which is determined by its position in the source code during code execution phase.

      - A lexical scope allows a function scope to access variables in the outer scope

      - Outer scope: A function can its access own variables and any vaiable declared outside. 


 */

//var x = 10; //

var x;

function fn() {
  //var x = 20;

  console.log(x);
}

fn(); // 20
