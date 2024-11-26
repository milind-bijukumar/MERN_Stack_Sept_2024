/**
     What is proxies in JS?

      - Proxies are the objects in JS that allows you to intercept and customise the operations perfomed in that object such as reading, writing and deleting the properties.
      
 */

let obj = {
  eng: "English",
  math: "Math",
};

let handler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw new Error("Property not found");
    }
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
      //return true;
    } else {
      throw new Error("Property not found");
    }
  },
};

const proxyObj = new Proxy(obj, handler);

console.log(proxyObj);

console.log(proxyObj.eng);

//proxyObj.history = "History";

console.log(delete proxyObj.eng);

console.log(proxyObj);
