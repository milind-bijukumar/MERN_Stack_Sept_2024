/**
   
    Freezing properties:

       - How can you achiveve immutability of an object in JS?

       - This can be achieved via below methods:

       1. Object.seal(): It's a built in JS method, which help you to preventing adding new properties and making existing properties as non-configurable. This means you can't add or remove properties from the sealed object. But you can modify the values of existing properties.

       2. Object.freeze(): Freezing the object, makes the object readable only and preventing any modifications.

       3. Objcet.preventExtensions() 


 */

const obj = {
  name: "Ashwani Rajput",
  age: 30,
};

//Object.seal(obj);

Object.freeze(obj);

console.log(obj);

console.log(Object.isFrozen(obj));

obj.name = "Ashwin";

console.log(obj.name);

delete obj.name;

console.log(obj.name);

// usecase of db congiguration

const dbConfig = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.2",
    port: 8080,
    name: "mongoDB",
    pwd: "admin",
  },
};

let freezedDbConfig = Object.freeze(dbConfig);

freezedDbConfig.appName = "google.com";

delete freezedDbConfig.appName;

console.log(freezedDbConfig);

// Try to expolre Object.preventExtentions()
