/**
   
    Map:

     - allows you to store the data in key: value format.
     - keys in Map can be of any type, including the objets and primitives.
     - It provides the buit-in methods to perform the operation on MAp data strcture.
     - In Map, no duplcate keys are allowed.


    WeakMap: 

      - similar to MAp but witha key difference
      - keys in WeakMap can be object only, can't allow primitives.
      - doesn't provide the couple of methods to iterate it.
 */

let myMap = new Map();

myMap.set("name", "Ashwani Rajput");
myMap.set("age", 30);
myMap.set("age", 28);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.get("name"));

for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

const obj = {
  name: "Ashwin",
  age: 30,
};

const myWeakMap = new WeakMap();

const key1 = { id: 1 };
const key2 = { id: 2 };

myWeakMap.set(key1, "Ashwani");
myWeakMap.set(key2, "30");

console.log(myWeakMap.get(key1));
