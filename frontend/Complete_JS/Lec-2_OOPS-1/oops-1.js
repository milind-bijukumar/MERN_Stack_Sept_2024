/**

   What is object in JS?

     - Object is a real worl entitity (that physically exists)
     - An object is a collection of properties and methods, represented by key-value pairs.
     - How to access the objects?

       - 2 ways to access the objects:
         1. dot operator, eg: objectname.keyname
         2. bracket notion, eg: objectname['keyname']
    
    Object vs JSON:

    JSON: JavaScript Object Notation, used to exchange the information from client to server and vice versa

    JSON.parse(): to convert string into an object

    JSON.Stringify(): to convert objects into textual JSON format.

    Native vs host objects:
    -----------------------

    Native object:

      - These are those objects that are provided by JS PL itself. Eg: JSON, Date, Error 

    Host Object:

       - These are those objects that are provided by the enviornment. Eg: window, document, localStorage, sesionStorage

       -  NodeJS: global, process

    How this behaves?

     - this is reserved word in JS
     - It refers to the context that is currently being used.
     - It's value depends on how and where the code is being executed.
     - That's why "this" behaves differntly in differnt situations.

     1. Global context:

       this refers tha global object (window) is global object in case of browsers.

       this === window //true

     2. Inside a function:

          In normal function, this refers to the global object which is window unless in strict mode where it is undefined.

        function show(){
          console.log(this);
        }

        show();
    3. Inside the object method:

       - when you use "this" in a method then this refers to that object itself.

       - const person = {
       
           name: "Ashwani Rajput",
           age: 30,

           greet: function() {
             console.log(`Hello, ${this.name}! How are you?`);
           },

           bio: function() {
             console.log(`Hi, my name is ${this.name} and my age is ${this.age}`)
           }
        
         } 
    4. Constructor function:

       - In contructor function, this refers to the new object being created.

       - function Person(name, age){
           this.name = name;
           this.age = age;

           this.greet = function() {
            console.log(`Hello, ${this.name}! How are you?`);
           }
         }
    
    5. In arrow function:

        Arrow functions don't have their own this; they inherit "this" from the surrounding context in which they are declared.

        const person = {
          
           name: 'Ashwin',

           greetMsg: function() {
            console.log(`Hello, ${this,name}`)
           }
        
        }

    6. In event handlers:

        "this" refers to the element that triggered the event.

    7. Explicitly set this:

       you can do using call(), apply() and bind()

    Will talk about inheritance and prototype in next session

 */

"use strict";
// import data from "./sample.json";

// console.log(JSON.stringify(data));

// const obj = {
//   name: "Ashwani Rajput",
//   age: 32,
//   "full_name.10": "Ashwani Kumar Rajput",
// };

// console.log(obj.name);
// console.log(obj["full_name.10"]);

// const data = {
//   name: "Ashwani Rajput",
//   age: 32,
// };

// function show() {
//   console.log(this);
// }

// show();

// const person = {
//   name: "Ashwani Rajput",
//   age: 30,

//   greet: function () {
//     console.log(`Hello, ${this.name}! How are you?`);
//   },

//   bio: function () {
//     console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
//   },
// };

// person.greet();
// person.bio();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.greet = function () {
//     console.log(`Hello, ${this.name}! How are you?`);
//   };
// }

// function Person(name, age, data) {
//   this.name = name;
//   this.age = age;
//   this.data = data;

//   this.greet = function () {
//     console.log(`Hello, ${this.name}! How are you? ${this.data}`);
//   };
// }

// const ashwani1 = new Person("Ashwani Rajput", 30, "hello");

// ashwani1.greet();

const person1 = {
  name: "Ashwin",

  greetMsg: () => {
    console.log(`Hello, ${this.name}`);
  },
};

person1.greetMsg();
