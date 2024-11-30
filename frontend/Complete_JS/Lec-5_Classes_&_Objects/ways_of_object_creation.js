/**

   ways to create objects:

      1. Object literal
      2. Object.create();
      3. Constructor Function -> (Array, Date, Number, String)
      4. class based constructor


      1. object literal:

          - a comma separated list of name-value pairs inside the curly braces

          - Eg: 

             const person = {
                name: "Ashwani Rajput",
                age: 30,

                print: function() {
                  console.log(Hello, `${this.name}`);
                }
             }

          - In Object literal you can define properties and methods.

        2. Object.create(): To create objects from an existing or null by passsing a null value to Object.create();
        - It will not point to any other existing object and there will no prototype associated with.

        3. Constructor Function:

            - In JS , Constructor function can also be used to create the objects.
            - In ES5, we didn't any class keyword, so to simulate the behavior like a class JS people uses Constructor Function

            - function ConstructorFunctionName(property) {
               this.property = propery;
               this.print = function() {
                  // you function logic  
            } 
        
        4. classes and how to build objects using classes

           - class is a keyword that was introduced in ES6(2015), to declare the propermites and method like class syntax and you define the constructor inside the classes.

           - Syntax:

              class Person {
                 constructor(name, age) {
                    this.name = name;
                    this.age = age;
                 
                 }

                 print() {
                    // can place your logic here
                 
                 }
              
               }

               
    


 */

const person = {
  name: "Ashwani Rajput",
  age: 30,

  print: function () {
    console.log(Hello, `${this.name}`);
  },
};

console.log(person);

const obj2 = Object.create(person);

//obj2.name = "Ashwin";

console.log(obj2);
console.log(person);

// Object.create()
const obj3 = Object.create(null);

console.log(obj3);

obj3.name = "Ashwani Rajput";

// Constructor function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.greeMsg = function () {
//     console.log(`Hello ${this.name} and my age is ${this.age} `);
//   };
// }

// How to create object using CF?

// const objName = new Person("Ashwani Rajput", 30)

// const ashwin = new Person("Ashwani Rajput", 30);

// console.log(ashwin.greeMsg());

// build the object using classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`Hello ${this.name} and my age is ${this.age} `);
  }
}

const ashwin = new Person("Ashwani Rajput", 30);

console.log(ashwin.print());

/**

      How to iterate an objects?
        1. using for...in loop -> introduced in ES3 onwards 
        2. using for...of loop  -> introduced in ES6 
*/

for (let key in ashwin) {
  console.log(ashwin[key]);
}

const keys = Object.keys(person);
console.log(keys);

for (let i of keys) {
  console.log(i);
}
