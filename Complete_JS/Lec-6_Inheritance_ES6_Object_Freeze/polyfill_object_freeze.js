/**

    Polyfill of Object.freeze()

 */

Object.prototype.myFreeze = function (obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // prevent new properties from being added

  Object.preventExtensions(obj);

  // Iterate all the properties
  Object.getOwnPropertyNames(obj).forEach(function (key) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (descriptor && descriptor.configurable) {
      if (descriptor.value === "object" && descriptor.value !== null) {
        Object.myFreeze(descriptor.value);
      }

      Object.defineProperty(obj, key, {
        value: descriptor.value,
        writable: false,
        enumerable: descriptor.enumerable,
        configurable: false,
      });
    }
  });
  return obj;
};

const obj = {
  name: "Ashwani Rajput",
  age: 30,
};

Object.myFreeze(obj);

console.log(obj);

console.log(Object.isFrozen(obj));

obj.name = "Ashwin";

console.log(obj.name);

delete obj.name;

console.log(obj.name);

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
