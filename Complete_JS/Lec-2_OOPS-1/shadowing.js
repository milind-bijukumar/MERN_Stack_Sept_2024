/**

    What is shadowing in JS?

      - When the same name of vaiblaes decalred within scope of variables that is nothing but called as shadowing.

      - 2 types of shadowing:

       1. legal shadowing: When a varaible is defined outside the function or block scope with the same name that is known as legal shadowing.
       
        var x = 10;

         function shadowingConcept() {
         
           var x = 20;
           console.log(x);
        
        }

        let x = 30;

        function shadowingConcept() {
           let x = 20;

           console.log(x)
        
        }


       2. illegal shadowing: When a variable is re-decalared within the same scope using the same name with let or const or var.




 */

// var x = 10;

// function shadowingConcept() {
//   var x = 20;
//   console.log(x);
// }

// let x = 30;

// function shadowingConcept() {
//   let x = 20;

//   console.log(x);
// }

// shadowingConcept();

let x = 10;

function illegalShadowing() {
  let x = 20;
  console.log(x);
}

illegalShadowing();

//let x = 30;

let c = x + 40;

console.log(c);
