/**
   
    Before understanding the shallow copy and deep copy. You need to understand how the copy works for arrays and objects

    Shallow copy:

      - A shallow copy will create a copy of top-level properties of an object not the nested object.

      - There several ways to achieve the shallow copy for an object:

         1. using spread operator
            const person1 = {...person};

         2. Object.assign(destObj, sourceObj);

            const person2 = Object.assign({}, person);
         3. Object.create(originalObj);
            const person3 = Object.create(person)

      - There several ways to achieve the shallow copy for an array:

        1. using spread operator ([...arrname])
        2. Array.prototype.slice():

            const arr2 = arr.slice();
        3. array's concat() method:
            const arr1 = [1,10];
            const arr2 = [2,3];
            const arr3 = arr1.concat(arr2);

        4. array's map() method also creates a shallow copy

        Deep Copy:

          - it creates a independent copy of an array or objects including the nested objects and arrays.

          - There are 2 ways to achieve the deep copy:

             1. JSON.parse(JSON.stringify(object)) -> bit slow as compared to _.cloneDeep() 
             2. loadash._.cloneDeep(object); -> https://onecompiler.com/nodejs/3zcs6wrdv - third party librray and including it in our project can impact a bit web performance

         
      
 */

const person = {
  name: "Ashwani",
  age: 29,
};

// Shallow copy for objects

//let person1 = person; // copy an object person into another variable person1

//let person1 = { ...person }; // copy an object person into another variable person1 using spread operator

let person1 = Object.assign({}, person);

person1.name = "Hemant Kumar";
person1.age = 28;

console.log(person1);
console.log(person);

// lets solve the above problem of maintianing the original object values not being updated. -> shallow copy

// Shallow copy for arrays

const arr = [1, 2, 3, 4, 5];

const arr1 = [...arr];

arr1.push(10);

const arr2 = arr1.map((item) => {
  return item * 2;
});

console.log("Original Array", arr);

console.log(arr1);

console.log("Modified Array", arr2);

// PS - shallow copy can't update the top-level properties values but it modify the nested level properties values.

// Nested object -> an object inside another object.

// const student = {
//   name: {
//     firstName: "Ashwani",
//     lastName: "Rajput",
//   },

//   age: 30,
//   address: {
//     street: "Dwarka",
//     city: "Delhi",
//     country: "India",
//   },
// };

// const student2 = Object.assign({}, student);

// student2.address.city = "Banglore";
// student2.age = 40;

// console.log(student);
// console.log(student2);

// The top-level properities are not getting modiefied only but nested level are modifying. So, what is the solution not to modify even the nesting level objects.

// implement the deep copy:

const student = {
  name: {
    firstName: "Ashwani",
    lastName: "Rajput",
  },

  age: 30,
  address: {
    street: "Dwarka",
    city: "Delhi",
    country: "India",
  },
};

const student2 = Object.assign({}, student);

const student2 = JSON.parse(JSON.stringify(student));

student2.address.city = "Banglore";
student2.age = 40;

console.log(student);
console.log(student2);
