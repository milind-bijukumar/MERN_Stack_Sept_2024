/**

   Set:

     - allows to you store the unique values of any types.
     - doesn't allow the duplicate values, each value/elmenet must be uniuqe.


    WeakSet:

     - Similar to Set but with a key difference
     - only allow to store object not primitives
     - doesn't expose the methpods to iterarte over the elements and not provide size for the WeakSet.


 */

// returns unqiue company name from an array of objects

const userData = [
  { id: 1, name: "Ashwani Rajput", company: "SYF" },
  { id: 2, name: "Rajesh", company: "Meta" },
  { id: 3, name: "Raviteja", company: "Microsoft" },
  { id: 4, name: "Umakanta", company: "Microsoft" },
  { id: 5, name: "Hemant", company: "IBM" },
];

// o/p: ['SYF', 'Meta', 'Microsoft', 'IBM']

const companies = [];

userData.forEach((user) => {
  companies.push(user.company);
});

console.log([...new Set(companies)]);

const mySet = new Set();

mySet.add("1");
mySet.add({ id: 1 });

console.log(mySet);

mySet.forEach((el) => {
  // play around the Data structure
});

const myWeakSet = new WeakSet();

const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);
console.log(myWeakSet.has(obj3));
console.log(myWeakSet.delete(obj2));
console.log(myWeakSet);
